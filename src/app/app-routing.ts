/**
 * Created by admin on 2017/6/30.
 */
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {HeroesComponent} from "./heroes/heroes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
const routes:Routes=[
  {path:'heroes', component:HeroesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component:HeroDetailComponent}
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }