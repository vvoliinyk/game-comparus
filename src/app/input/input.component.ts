import { Component, Input } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.css"],
})
export class InputComponent {
  @Input({ required: true }) formControl!: FormControl;
  @Input() label: string = "";
  @Input() name: string = "input";
}
