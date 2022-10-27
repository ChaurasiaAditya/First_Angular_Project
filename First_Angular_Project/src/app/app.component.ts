import { Component } from '@angular/core';
import { menu } from './Model/menuDetails'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'First_Angular_Project';

  menus = menu;

}
