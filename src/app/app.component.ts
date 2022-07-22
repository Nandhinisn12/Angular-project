import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'ANGULAR ' + VERSION.major;
  public headers = ['Flavour', 'Ratings', 'Price'];
  public rows = [
    {
      Flavour: 'Strawberry',
      Ratings: '4STAR',
      Price: '250',
    },
    {
      Flavour: 'Toffee',
      Ratings: '3STAR',
      Price: '190',
    },
  
  ];
}
