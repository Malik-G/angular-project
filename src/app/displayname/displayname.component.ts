import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displayname',
  templateUrl: './displayname.component.html',
  styleUrls: ['./displayname.component.scss']
})
export class DisplaynameComponent implements OnInit {
  name: string;
  age = '';
  homeState = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Using params in the URL (i.e. /someParam)
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name');
    });
    // Using query params in the URL (i.e. ?, &)
    this.route.queryParamMap.subscribe(queryParams => {
      this.age = queryParams.get('age');
      this.homeState = (queryParams.get('homestate').charAt(0).toUpperCase()) + (queryParams.get('homestate').slice(1));
    });
  }

}
