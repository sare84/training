import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalEvent = new EventEmitter<number>();
  intervalNumber = 0;
  intervalIdent;

  constructor() { }

  ngOnInit() {  }

  doInterval() {
    this.intervalNumber++;
    this.intervalEvent.emit(this.intervalNumber);
    console.log(this.intervalNumber);
  }

  start() {
    console.log('Start');
    this.intervalIdent = setInterval(() => { this.doInterval(); }, 1000);
  }

  stop() {
    console.log('Stop');
    clearInterval(this.intervalIdent);
  }
}
