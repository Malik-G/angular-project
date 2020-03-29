import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent implements OnInit {
  canyons;
  constructor(service: GetDataService) {
    this.canyons = service.getCanyons();
  }

  ngOnInit(): void {
  }

}
