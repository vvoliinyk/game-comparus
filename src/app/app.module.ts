import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FieldModule } from './field/field.module';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [AppComponent, DialogComponent],
  imports: [BrowserModule, FieldModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
