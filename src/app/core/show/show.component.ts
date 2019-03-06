import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Show } from '../models/show';
import { ShowsService } from '../services/shows.service';
import { Cast } from "../models/cast";

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

    public show: Show;
    public cast: Cast[];
    public showCastFlag: boolean = false;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private showsService: ShowsService
    ) { }

    ngOnInit() {
        this.getShowDetails(this.activatedRoute.snapshot.params.id);
        this.getCastTable(this.activatedRoute.snapshot.params.id);

    }

    private getShowDetails(id: number): void {
        this.showsService.getOneShow(id)
            .then(oneShow => this.show = oneShow)
            .catch(result => console.log(result))
    }

    private getCastTable(id: number): void {
        this.showsService.getShowCast(id)
            .then(castArray => this.cast = castArray)
            .catch(result => console.log(result))
    }

    public backToTable() {
        this.router.navigate(["/shows"]);
    }

    public toggleCast(): void {
        this.showCastFlag = this.showCastFlag ? false : true;
    }
}
