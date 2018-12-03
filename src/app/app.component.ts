import { Component,HostListener,OnInit  } from '@angular/core';
import { AppService } from '../services/app.service';
import { Subscription } from 'rxjs';
import * as SpatialNavigation from '../SpatialNavigation.js'
import { Router, NavigationEnd} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `<router-outlet ></router-outlet>`
  
})
export class AppComponent {
	constructor(private appservice:AppService){
		this.appservice.startSpatial();
	}
 	ngOnInit(){
		 this.appservice.startSpatial();	 
	}
}


