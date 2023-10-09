import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  public isOpen = false;
  public content: string = "";

  public open(content: string) {
    this.content = content;
    this.isOpen = true;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  public close() {
    this.isOpen = false;
    this.content = "";
  }
}
