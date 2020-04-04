import { NgModule } from '@angular/core';
import { SearchLibComponent } from './search-lib.component';
import { HeaderSearchComponent } from './header-search/header-search.component';
import { HeaderSearchModule } from './header-search/header-search.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SearchLibComponent, 
    HeaderSearchComponent
  ],
  imports: [
    HeaderSearchModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule
  ],
  exports: [
    SearchLibComponent, 
    HeaderSearchModule,
    HeaderSearchComponent
  ]
})
export class SearchLibModule { }
