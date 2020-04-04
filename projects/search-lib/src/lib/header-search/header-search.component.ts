import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { FilmService } from '../service/film.service';
import { Film } from '../model/Film.model';

@Component({
  selector: 'lib-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.sass']
})
export class HeaderSearchComponent implements OnInit {

  // subscription: Subscription;
  films: Film[];
  form: FormGroup;
  informationText = false;
  inputText = '';

  constructor(private filmsService: FilmService) {}

  ngOnInit() {
    this.form = new FormGroup({
      search: new FormControl('',[
        Validators.required,
        Validators.pattern(/[A-z]/)
      ])
    });
  }
  onKeyUp(value) {
    this.inputText = value;
    this.informationText = true;
  }

  updateFilms() {
    this.filmsService.getFilms().subscribe((data: any) =>
    {
      this.films = Object.values(data.data);
      console.log('submit header request');
      console.log(this.films);
    });
  }

}
