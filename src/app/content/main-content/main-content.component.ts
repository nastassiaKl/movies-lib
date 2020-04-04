import { FilmsService } from '../../shared/services/films.sevrice';
import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})

export class MainContentComponent implements OnInit {

  films: any = [];
  vote: number;

  constructor(private filmsService: FilmsService) {}

 ngOnInit() {
   this.filmsService.getFilms().subscribe((data: any) =>
   {
     this.films = Object.values(data.data);
   });
 }

}
