import { Component, OnInit } from '@angular/core';
import { EndpointsService } from 'src/app/services/endpoints.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  data;
  constructor(public endpts: EndpointsService) { }

  async ngOnInit() {
    this.data = await this.endpts.request("about", "get").toPromise();
  }

}
