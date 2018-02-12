import { Component} from '@angular/core';
import {clickedStateTriger, numberEnteredTriger} from "./animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    clickedStateTriger,
    numberEnteredTriger
  ]
})
export class AppComponent {
  clickInfo = 'default';
  paragraphClicked = 'default';
  numberEntred;

  onClick() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 2000)
  }
}

