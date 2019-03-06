import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../services/shows.service';
import { Show } from "../models/show";
import { Router } from '@angular/router';

@Component({
    selector: 'app-shows',
    templateUrl: './shows.component.html',
    styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {

    private shows: Show[];
    public get showsBySearch(): Show[] {
        return this.shows.filter(show => show.name.toLowerCase().includes(this.searchText.toLowerCase()));
    };
    public searchText: string = "";

    constructor(private showsService: ShowsService, private router: Router) { }

    ngOnInit() {
        this.getTable();
    }

    public showDetails(id: number) {
        if (!this.router.navigate(['show', this.showsBySearch[id].id])) console.log(err => err);
    }

    public getTable(): void {
        this.showsService.getAllShows()
            .then(
                showsArray => {
                    this.shows = showsArray;
                })
            .catch(reason => {
                console.log(reason);
            });
    }
}
