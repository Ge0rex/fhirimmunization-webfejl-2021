import { Component } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/models/database/category.database';


@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent{
  categories = CATEGORIES;
  constructor() { }

 

}
