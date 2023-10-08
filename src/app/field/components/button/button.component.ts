import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
})
export class ButtonComponent {
  @Input() disabled = false;
  @Output() OnClick = new EventEmitter();

  click() {
    this.OnClick.emit();
  }
}
