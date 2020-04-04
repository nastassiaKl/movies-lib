import { FilmsService } from '../../shared/services/films.sevrice';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-content',
  templateUrl: './item-content.component.html',
  styleUrls: ['./item-content.component.css']
})
export class ItemContentComponent implements OnInit {

  id: string;
  item: any = [];

  constructor(
    private route: ActivatedRoute,
    private httpService: FilmsService
    ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.httpService.getFilmsById(this.id).subscribe((data: any) =>
    {
      this.item = data;
      console.log('item')
    })
  }

}
