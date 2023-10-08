import { Component } from "@angular/core";

const WIN_SCORE = 10;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public winScore = WIN_SCORE;
}
