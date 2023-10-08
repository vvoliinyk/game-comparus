import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { FieldComponent } from './field.component';
import { InputComponent } from './components/input/input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './components/dialog/dialog.component';



@NgModule({
  declarations: [
    ButtonComponent,
    FieldComponent,
    InputComponent,
    DialogComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [FieldComponent]
})
export class FieldModule {}