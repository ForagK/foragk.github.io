import { Component } from '@angular/core';
import { AboutUs } from '../about-us/about-us';
import { AboutGame } from '../about-game/about-game';

@Component({
  selector: 'app-main-page',
  imports: [ AboutUs, AboutGame],
  templateUrl: './main-page.html',
  styleUrl: './main-page.css',
})
export class MainPage {

}
