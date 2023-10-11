import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DEFAULT_TIME, DELAY, FIELD_LENGTH } from '../constants';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css'],
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

  constructor(private dialog: DialogService) {
    this.fieldLengthArray = Array(FIELD_LENGTH);

    for (let i = 0; i < this.fieldLengthArray.length; i += 1) {
      for (let j = 0; j < this.fieldLengthArray.length; j += 1) {
        this.fieldPoints.push(this.getIndex(i, j));
      }
    }
  }

  public onStart() {
    this.isStarted = true;

    setTimeout(() => {
      this.nextStep();
    }, DELAY);
  }

  private nextStep() {
    if (
      this.userPoints.length < this.winScore &&
      this.computerPoints.length < this.winScore
    ) {
      this.setRandomPoint();
      this.OnComputerClick();
    } else {
      this.dialog.open(
        `${
          this.userPoints.length >= this.winScore
            ? 'Вітаємо! Ви перемогли'
            : 'Нажаль Ви програли'
        } з рахунком ${`${this.userPoints.length} - ${this.computerPoints.length}`}`,
      );
      this.reset();
    }
  }

  private setRandomPoint() {
    this.activePointIndex = Math.round(Math.random() * this.fieldPoints.length);
  }

  private OnComputerClick() {
    this.timeout = setTimeout(() => {
      if (this.activePointIndex) {
        this.computerPoints.push(this.fieldPoints[this.activePointIndex]);
        this.removePoint(this.activePointIndex);
      }
      this.activePointIndex = null;

      this.nextStep();
    }, this.formControl.value || DEFAULT_TIME);
  }

  public OnUserClick() {
    clearTimeout(this.timeout);
    if (this.activePointIndex) {
      this.userPoints.push(this.fieldPoints[this.activePointIndex]);
      this.removePoint(this.activePointIndex);
    }
    this.activePointIndex = null;

    this.nextStep();
  }

  private removePoint(index: number) {
    this.fieldPoints = [
      ...this.fieldPoints.slice(0, index),
      ...this.fieldPoints.slice(index + 1),
    ];
  }

  private reset() {
    this.activePointIndex = null;
    this.userPoints = [];
    this.computerPoints = [];
    this.isStarted = false;
  }

  public getIndex(i: number, j: number) {
    return i * FIELD_LENGTH + j;
  }

  public isActive(i: number, j: number) {
    return (
      this.activePointIndex &&
      this.getIndex(i, j) === this.fieldPoints[this.activePointIndex]
    );
  }
}
