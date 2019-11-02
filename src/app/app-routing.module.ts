import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Pages from './components/index';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PlayComponent } from './components/play/play.component';
import { ReplayComponent } from './components/replay/replay.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'play', component: PlayComponent },
  { path: 'replay', component: ReplayComponent },
  { path: 'list', component: ListComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
