import { Injectable, EventEmitter } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable, Subject } from 'rxjs';
import * as SpatialNavigation from '../SpatialNavigation.js'
import { ImageValuesObject } from "../interfaces/imageValue.interface";


@Injectable()
export class AppService {
	public modelImageValuesObject = new ImageValuesObject('');
	ImageValuesObject = new ImageValuesObject();
	
    constructor(private http: Http) { }

    startSpatial(){
    	console.log("init ===",SpatialNavigation)
    	SpatialNavigation.init();
    	SpatialNavigation.add({
    		selector: '.focusable'
    	})
    	SpatialNavigation.makeFocusable();
    	SpatialNavigation.focus();
	}

	setImageValuesObject(imageValuesObject: ImageValuesObject) {
        this.ImageValuesObject = imageValuesObject;
    }
    getImageValuesObject() {
        return this.ImageValuesObject;
	}
	

   
}
