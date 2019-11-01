import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as Pages from './components/index';

let pageKeys = Object.keys(Pages);
let pathKeys = {};
pageKeys.map(x => { pathKeys[x] = pascalToDash(x.split("Component")[0]) });

const routes: Routes = [];
pageKeys.map(k => {
  routes.push({ path: pathKeys[k], component: Pages[k] });
});
routes.push({ path: '', component: Pages.HomeComponent });

function pascalToDash(str) {
  return str.replace(/\W+/g, '-').replace(/([a-z\d])([A-Z])/g, '$1-$2').toLowerCase()
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
