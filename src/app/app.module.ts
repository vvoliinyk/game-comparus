import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { FieldModule } from "./field/field.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FieldModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
