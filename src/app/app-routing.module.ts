import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShowsComponent } from './core/shows/shows.component';
import { ShowComponent } from './core/show/show.component';

const routes: Routes = [
    { path: "shows", component: ShowsComponent },
    { path: "show/:id", component: ShowComponent },
    { path: "", redirectTo: "shows", pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
