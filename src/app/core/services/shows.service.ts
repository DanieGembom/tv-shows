import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Show } from '../models/show';
import { Cast } from '../models/cast';

@Injectable({
    providedIn: 'root'
})

export class ShowsService {

    public constructor(private httpClient: HttpClient) { }

    public getAllShows(): Promise<Show[]> {
        return this.httpClient.get<Show[]>("http://api.tvmaze.com/shows")
            .toPromise()
            .then()
            .catch(err => err);
    }

    public getOneShow(id: number): Promise<Show> {
        return this.httpClient.get<Show>("http://api.tvmaze.com/shows/" + id)
            .toPromise()
            .then()
            .catch(err => err);
    }

    public getShowCast(id: number): Promise<Cast[]> {
        return this.httpClient.get<Cast[]>("http://api.tvmaze.com/shows/" + id + "/cast")
            .toPromise()
            .then()
            .catch(err => err);
    }

}
