import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './components/button/button.component';
import { FieldComponent } from './field.component';
import { InputComponent } from './components/input/input.component';

@NgModule({
  declarations: [ButtonComponent, FieldComponent, InputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FieldComponent],
})
export class FieldModule {}
