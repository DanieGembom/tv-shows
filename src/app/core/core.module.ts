import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowsComponent } from './shows/shows.component';
import { ShowComponent } from './show/show.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        ShowsComponent,
        ShowComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule
    ],
    exports: [
        ShowComponent,
        ShowsComponent
    ]
})
export class CoreModule { }
