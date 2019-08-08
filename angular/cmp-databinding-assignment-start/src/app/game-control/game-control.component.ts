import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  intervalIdent;

  constructor() { }

  ngOnInit() {
  }

  doInterval() {
    console.log('Intervall Method');
  }

  start() {
    console.log('Start');
    this.intervalIdent = setInterval(this.doInterval, 1000);
  }

  stop() {
    console.log('Stop');
    clearInterval(this.intervalIdent);
  }
}
