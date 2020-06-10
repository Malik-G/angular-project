import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'master-button',
  templateUrl: './master-button.component.html',
  styleUrls: ['./master-button.component.scss']
})
export class MasterButtonComponent implements OnInit {
  @Input() type: string;
  @Input() title: string;
  @Output() customEmmiter = new EventEmitter();
  // This property was used when the parent function parentAlert() got passed down to it from app.component.html
  // @Input() parentAlertPassToChild;

  constructor() { }

  ngOnInit() { }

  // Note that the "type" passed into (click)="triggerParentFunction(type)" in this component's html file represents this.type,
  // which ultimately get used in the parent component's html file (i.e. app.component.html)
  triggerParentFunction(type) {
    this.customEmmiter.emit(type);
    // console.log('click event successfully triggered');
  }

}
