import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styles: [],
})
export class HomeComponent {
  cols = 3;

  onColumnsCountChange(columns: number): void {
    this.cols = columns;
  }
}
