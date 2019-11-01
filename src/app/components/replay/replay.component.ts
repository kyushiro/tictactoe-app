import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.scss']
})
export class ReplayComponent implements OnInit {
  game;
  gamegrid = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];
  readhead = 0;
  constructor() { }

  ngOnInit() {
    this.game = JSON.parse(window.localStorage.getItem("game"));
    this.game.game_steps = this.game.game_steps.filter((x, i) => i >= 3);
  }

  moveReadhead(idx) {
    this.readhead += idx;
    if (this.readhead < 0) this.readhead = 0;
    if (this.readhead > this.game.game_steps.length - 1) this.readhead = this.game.game_steps.length - 1;
  }



}
