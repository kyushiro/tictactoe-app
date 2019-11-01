import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/services/endpoints.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  list;
  constructor(public endpts: EndpointsService, private router: Router) { }

  async ngOnInit() {
    this.list = await this.endpts.request("list-games", "get").toPromise();
    console.log("list is:", this.list);
  }

  replay(item) {
    console.log("item in replay: ", item);
    let serializedGame = JSON.stringify(item);
    window.localStorage.setItem("game", serializedGame);
    this.router.navigate(['/replay']);
  }

}
