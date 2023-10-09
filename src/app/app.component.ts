import { Component } from "@angular/core";
import { WIN_SCORE } from "./constants";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public winScore = WIN_SCORE;
}
