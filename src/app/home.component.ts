import { Component, HostListener, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';
import { Subscription } from 'rxjs';
import * as SpatialNavigation from '../SpatialNavigation.js'
import { Router, ActivatedRoute } from '@angular/router';
import { ImageValuesObject } from "../interfaces/imageValue.interface";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./app.component.css'],

})
export class HomeComponent {

    title = 'jiomobile1';
    public pressedButton: string = '';
    public key: string = '';
    ImageList: boolean;
    ImageGrid: boolean;
    Image1: any = "img1";
    Image3: any = "img2";
    Image4: any = "img3";
    Image5: any = "img4";
    private value: ImageValuesObject = new ImageValuesObject();
    constructor(private appservice: AppService, private router: Router, private route: ActivatedRoute) {
        // this.appservice.startSpatial();
        this.value = this.appservice.getImageValuesObject();

    }

    ngOnInit(event: KeyboardEvent) {

    }

    onKeydown(e: any) {
        console.log("hello", e.which, SpatialNavigation.focus())
        console.log("e.path[0].id", e.path[0].currentSrc);
        this.appservice.startSpatial();
        if (e.which === 13) {
            e.preventDefault();
            // console.log("e.target.result",e.target.result)
            console.log("e", e);
            console.log("e.path[0].id", e.path[0].id);
            if (e.path[0].id == 'list') {
                this.ImageGrid = false;
                this.ImageList = true;
            }
            else if (e.path[0].id == 'grid') {
                this.ImageList = false;
                this.ImageGrid = true;
            }
            else if (e.path[0].localName == 'img') {
                this.appservice.setImageValuesObject(e.path[0].currentSrc);
                this.router.navigate(['../showImage'], { relativeTo: this.route });
            }
        }
    }


}






