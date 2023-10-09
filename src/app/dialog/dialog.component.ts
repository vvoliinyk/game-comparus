import { Component } from "@angular/core";
import { DialogService } from "../dialog.service";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.css"],
})
export class DialogComponent {
  constructor(public dialog: DialogService) {

  }

}
