import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HeadToHeadService {
    constructor(private http: HttpClient){}

    getImages(): void {
        console.log("Nothing to see here")
    }
}