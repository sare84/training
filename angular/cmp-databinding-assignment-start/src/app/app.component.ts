import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  intervalNumbers: number[] = new Array<number>();

  onInterval(number) {
    this.intervalNumbers.push(number);
    console.log('onInterval', number, this.intervalNumbers);
  }
}
