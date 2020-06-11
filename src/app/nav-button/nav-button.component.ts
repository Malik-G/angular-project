import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-button',
  templateUrl: './nav-button.component.html',
  styleUrls: ['./nav-button.component.scss']
})
export class NavButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  navigation() {
    // Version that navigates to a base URL
    // this.router.navigate(['']);

    // Version that navigates to URL with a set of params
    // this.router.navigate(['displayname', 'malik']);

    // Version that navigates to URL with a set of params and queryParams
    this.router.navigate(
      ['displayname', 'malik'],
      {
        queryParams: { age: '27', homestate: 'minnesota' }
      }
    );
  }

}
