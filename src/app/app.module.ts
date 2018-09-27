import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HeadToHeadComponent } from './headtohead.component';
import { HeadToHeadService } from './headtohead.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '../../node_modules/@angular/common/http';


@NgModule({
  declarations: [
    HeadToHeadComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [HeadToHeadService, HttpClient],
  bootstrap: [HeadToHeadComponent]
})
export class AppModule { }
