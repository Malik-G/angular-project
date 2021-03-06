import { Component, OnInit } from '@angular/core';
import { GetDataService } from './get-data.service';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.scss']
})
export class ImageBoxComponent implements OnInit {
  canyons;
  username = '';
  password = '*****';
  theBox = false;
  pushed = false;
  showOrHide = 'Show';
  coverUrl = 'https://s27363.pcdn.co/wp-content/uploads/2017/09/Antelope-Canyon.jpg.optimal.jpg';
  constructor(service: GetDataService) {
    this.canyons = service.getCanyons();
  }
  parentClick(event) {
    console.log(event);
  }
  childClick(event) {
    // event.stopPropagation() is needed so that this child click event does not flow to the parent obj as well
    event.stopPropagation();
    console.log(event);
  }
  showBox() {
    this.theBox = !this.theBox;
    this.pushed = !this.pushed;
    this.pushed ? this.showOrHide = 'Hide' : this.showOrHide = 'Show';
  }
  ngOnInit(): void {
  }

}
