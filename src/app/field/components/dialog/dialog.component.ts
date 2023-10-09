import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"],
})
export class DialogComponent {
  @Input() isUserWin = false;
  @Input() result?: string;
  @Output() OnClose = new EventEmitter();

  close() {
    this.OnClose.emit();
  }
}
