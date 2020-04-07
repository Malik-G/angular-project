import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-component',
  templateUrl: './tabs-component.component.html',
  styleUrls: ['./tabs-component.component.scss']
})
export class TabsComponentComponent implements OnInit {
  currentActive = 1;

  constructor() { }

  tabClick(tab: number){
    this.currentActive = tab;
  }

  ngOnInit(): void {
  }

}
