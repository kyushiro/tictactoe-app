import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/services/endpoints.service';
import { SocketService } from '../../services/socket.service';
import { isNull } from 'util';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  game;
  gamegrid = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ];

  message = "";
  constructor(public endpts: EndpointsService, private socket: SocketService) {
    this.socket.getMessage().subscribe((x: any) => {
      console.log("this is a socket msg", x);
      this.gamegrid = x.board;
      if (x.win.win) {
        this.message = x.win.sign + " Wins!";
      } else if (x.fullBoard) {
        this.message = "Match Draw";
      }
    })
  }

  async ngOnInit() {
    this.game = (await this.endpts.request("create-game", "get").toPromise()).game;
    console.log("Game is", this.game);
  }

  move(y, x) {
    console.log(`x is ${x} y is ${y}`);
    if (!isNull(this.gamegrid[y][x])) return;
    this.gamegrid[y][x] = "o";
    let obj = {
      ref: this.game,
      board: this.gamegrid
    };
    this.socket.sendMessage(JSON.stringify(obj));


  }

}
