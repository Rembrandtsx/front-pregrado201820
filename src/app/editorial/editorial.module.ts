import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EditorialListComponent } from './editorial-list/editorial-list.component';
import { EditorialService } from './editorial.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { EditorialDetailComponent } from './editorial-detail/editorial-detail.component';

import { BookModule } from '../book/book.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        BookModule
    ],
    declarations: [EditorialListComponent, EditorialDetailComponent],
    providers: [EditorialService]
})
export class EditorialModule { }
