import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  constructor() { }

  getCanyons() {
    // return [];
    return [
      { name: 'Antelope Canyon', location: 'Page, AZ', distance: '< 1 mile' },
      { name: 'Zion Narrows', location: 'Southwest Utah', distance: '16 miles' },
      { name: 'Pastel Canyon', location: 'Valley of Fire, NV', distance: '0.5 miles' }
    ];
  }
}
