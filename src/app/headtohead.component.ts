import { Component } from '@angular/core';
import { HeadToHeadService } from './headtohead.service';

@Component({
  selector: 'app-root',
  templateUrl: './headtohead.component.html',
  styleUrls: ['./headtohead.component.css']
})
export class HeadToHeadComponent {
  title = 'upmoji-client';

  constructor(private headToHeadService: HeadToHeadService) {}

  ngOnInit(): void {
    this.headToHeadService.getImages()
  }
}
