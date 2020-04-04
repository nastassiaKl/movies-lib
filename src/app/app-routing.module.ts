import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainContentComponent } from './content/main-content/main-content.component';
import { ItemContentComponent } from './content/item-content/item-content.component';
import { NotFoundComponent } from './content/not-found/not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/films',  pathMatch: 'full'},
  { path: 'films', component: MainContentComponent},
  { path: 'film/:id', component: ItemContentComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo:'/not-found'}

  // { path: 'films', component: MainContentComponent, children:[
  //   { path: ':id', component: ItemContentComponent}
  // ]},
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
