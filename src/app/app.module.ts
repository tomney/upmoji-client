import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeadToHeadComponent } from './headtohead.component';
import { HeadToHeadService } from './headtohead.service';
import { HttpClient } from '../../node_modules/@angular/common/http';


@NgModule({
  declarations: [
    HeadToHeadComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [HeadToHeadService, HttpClient],
  bootstrap: [HeadToHeadComponent]
})
export class AppModule { }
