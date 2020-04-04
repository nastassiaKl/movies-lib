import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { listOfFilms } from './../models/listOfFilms.model';

@Injectable()
export class FilmsService {
    private requestUrl = 'https://reactjs-cdp.herokuapp.com/movies/';

    constructor(private http: HttpClient) {}

    getFilms(): Observable<listOfFilms[]> {
        return this.http.get<listOfFilms[]>(this.requestUrl);
    }

    getFilmsById(id: string) {
        return this.http.get(this.requestUrl + id);
    }
}

