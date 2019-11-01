import { Component } from '@angular/core';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tictactoe-app';

  constructor(private socket: SocketService) {
    this.socket.getMessage().subscribe(x => {
      console.log("this is a socket msg", x);
    })
  }

  ngOnInit() {
    this.socket.sendMessage("asdf");
  }

}
