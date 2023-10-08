import { Component, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

const DEFAULT_TIME = 1000;
const FIELD_LENGTH = 10;
const DELAY = 1000;
@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.css"],
})
export class FieldComponent {
  @Input() winScore!: number;
  public formControl = new FormControl(DEFAULT_TIME, [Validators.required]);
  public started = false;
  public userPoints: number[] = [];
  public computerPoints: number[] = [];
  public fieldPoints: number[] = [];
  public activePointIndex: number | null = null;
  public fieldLengthArray: number[];
  private timeout?: number;
  public isDialogOpen = false;

  constructor() {
    this.fieldLengthArray = Array(FIELD_LENGTH);

    for (let i = 0; i < this.fieldLengthArray.length; i += 1) {
      for (let j = 0; j < this.fieldLengthArray.length; j += 1) {
        this.fieldPoints.push(this.getIndex(i, j));
      }
    }
  }

  onStart() {
    this.started = true;
    setTimeout(() => {
      this.nextStep();
    }, DELAY);
  }

  setRandomPoint() {
    this.activePointIndex = Math.round(Math.random() * this.fieldPoints.length);
  }

  nextStep() {
    if (
      this.userPoints.length < this.winScore &&
      this.computerPoints.length < this.winScore
    ) {
      this.setRandomPoint();
      this.OnComputerClick();
    } else {
      this.isDialogOpen = true;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  reset() {
    this.activePointIndex = null;
    this.userPoints = [];
    this.computerPoints = [];
    this.started = false;
  }

  OnComputerClick() {
    this.timeout = setTimeout(() => {
      if (this.activePointIndex) {
        this.computerPoints.push(this.fieldPoints[this.activePointIndex]);
        this.removePoint(this.activePointIndex);
      }
      this.activePointIndex = null;

      this.nextStep();
      // TODO: fix
    }, this.formControl.value || DEFAULT_TIME) as unknown as number;
  }

  OnUserClick() {
    clearTimeout(this.timeout);
    if (this.activePointIndex) {
      this.userPoints.push(this.fieldPoints[this.activePointIndex]);
      this.removePoint(this.activePointIndex);
    }
    this.nextStep();
  }

  removePoint(index: number) {
    this.fieldPoints = [
      ...this.fieldPoints.slice(0, index),
      ...this.fieldPoints.slice(index + 1),
    ];
  }

  getIndex(i: number, j: number) {
    return i * FIELD_LENGTH + j;
  }

  isActive(i: number, j: number) {
    return (
      this.activePointIndex &&
      this.getIndex(i, j) === this.fieldPoints[this.activePointIndex]
    );
  }

  onClose() {
    window.scrollTo(0, 0);
    this.isDialogOpen = false;
    this.reset();
  }
}
