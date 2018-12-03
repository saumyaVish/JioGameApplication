import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { showImageComponent } from './showImage.component';

const APP_ROUTES: Routes = [

    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'showImage', component:  showImageComponent}
]
  export const routing = RouterModule.forRoot(APP_ROUTES);
