import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Film } from './../model/Film.model';

@Injectable()
export class FilmService {
    private requestUrl = 'https://reactjs-cdp.herokuapp.com/movies/';

    constructor(private http: HttpClient) {}

    getFilms(): Observable<Film[]> {
        return this.http.get<Film[]>(this.requestUrl);
    }
}

