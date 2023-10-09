import { Component, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { DEFAULT_TIME, DELAY, FIELD_LENGTH } from "../constants";

@Component({
  selector: "app-field",
  templateUrl: "./field.component.html",
  styleUrls: ["./field.component.css"],
})
export class FieldComponent {
  @Input() winScore!: number;
  public formControl = new FormControl(DEFAULT_TIME, [Validators.required]);
  public isStarted = false;
  public userPoints: number[] = [];
  public computerPoints: number[] = [];
  public fieldPoints: number[] = [];
  public activePointIndex: number | null = null;
  public fieldLengthArray: number[];
  private timeout?: NodeJS.Timeout;
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
    this.isStarted = true;

    setTimeout(() => {
      this.nextStep();
    }, DELAY);
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

  setRandomPoint() {
    this.activePointIndex = Math.round(Math.random() * this.fieldPoints.length);
  }

  OnComputerClick() {
    this.timeout = setTimeout(() => {
      if (this.activePointIndex) {
        this.computerPoints.push(this.fieldPoints[this.activePointIndex]);
        this.removePoint(this.activePointIndex);
      }
      this.activePointIndex = null;

      this.nextStep();
    }, this.formControl.value || DEFAULT_TIME)
  }

  OnUserClick() {
    clearTimeout(this.timeout);
    if (this.activePointIndex) {
      this.userPoints.push(this.fieldPoints[this.activePointIndex]);
      this.removePoint(this.activePointIndex);
    }
    this.activePointIndex = null;

    this.nextStep();
  }

  removePoint(index: number) {
    this.fieldPoints = [
      ...this.fieldPoints.slice(0, index),
      ...this.fieldPoints.slice(index + 1),
    ];
  }

  onClose() {
    window.scrollTo(0, 0);
    this.isDialogOpen = false;
    this.reset();
  }

  reset() {
    this.activePointIndex = null;
    this.userPoints = [];
    this.computerPoints = [];
    this.isStarted = false;
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
}
