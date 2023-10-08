import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ButtonComponent } from "./button/button.component";
import { FieldComponent } from "./field/field.component";
import { InputComponent } from "./input/input.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DialogComponent } from "./dialog/dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    FieldComponent,
    InputComponent,
    DialogComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
