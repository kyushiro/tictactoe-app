import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PlayComponent } from './components/play/play.component';
import { ListComponent } from './components/list/list.component';
import { ReplayComponent } from './components/replay/replay.component';
import { AboutComponent } from './components/about/about.component';

const config: SocketIoConfig = { url: 'https://api-roam-tictactoe.herokuapp.com', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayComponent,
    ListComponent,
    ReplayComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
