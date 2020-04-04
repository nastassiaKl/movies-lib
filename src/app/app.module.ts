import { SearchLibModule } from 'search-lib';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ItemContentComponent } from './content/item-content/item-content.component';
import { MainContentComponent } from './content/main-content/main-content.component';
import { NotFoundComponent } from './content/not-found/not-found.component';
import { FilmsService } from './shared/services/films.sevrice';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    MainContentComponent,
    ItemContentComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SearchLibModule
  ],
  providers: [FilmsService],
  bootstrap: [AppComponent],
})
export class AppModule { }
