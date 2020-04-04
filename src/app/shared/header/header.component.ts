import { HeaderSearchModule } from 'search-lib';

// import { listOfFilms } from './../models/listOfFilms.model';
// import { FilmsService } from './../services/films.sevice';
import { Component, OnInit, OnDestroy } from '@angular/core';

// import { Subscription } from 'rxjs';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // subscription: Subscription;
  // films: listOfFilms;
  // form: FormGroup;
  // informationText = false;
  // inputText = ''
  //
  //  constructor(private filmsService: FilmsService) {}
  //
  // ngOnInit() {
  //   this.form = new FormGroup({
  //     search: new FormControl('',[
  //       Validators.required,
  //       Validators.pattern(/[A-z]/)
  //      ])
  //   });
  // }
  // onKeyUp(value) {
  //   this.inputText = value;
  //   this.informationText = true;
  //   console.log(this.inputText);
  // }
  //
  // updateFilms(){
  //    this.subscription = this.filmsService.getFilms().subscribe((films: listOfFilms) =>
  //   {
  //     this.films = films;
  //     console.log('submit header request');
  //     console.log(films);
  //   });
  // }
  //
  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }

}
