import { Routes } from '@angular/router';
import { MainPage } from './components/main-page/main-page';
import { AboutUsPage } from './components/about-us-page/about-us-page';
import { AboutGamePage } from './components/about-game-page/about-game-page';

export const routes: Routes = [
    { path: '', component: MainPage },
    { path: 'about-us', component: AboutUsPage },
    { path: 'about-game', component: AboutGamePage }
];
