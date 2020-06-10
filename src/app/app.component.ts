import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mainTitle = 'Cool Canyons Club';

  // This function gets triggered by an EventEmmiter named customEmmiter located in the <master-button> child component
  customEvent(type: string) {
    alert(type);
  }

  // Used for the other example of passing props
  // parentAlert(type: string) {
  //   alert(type);
  // }
}
