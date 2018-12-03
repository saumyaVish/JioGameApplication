import { Component, HostListener, OnInit, AfterContentInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../services/app.service';
import { ImageValuesObject } from "../interfaces/imageValue.interface";
import * as SpatialNavigation from '../SpatialNavigation.js'

@Component({
  selector: 'show_image',
  templateUrl: './showImage.component.html',
  styleUrls: ['./app.component.css'],

})
export class showImageComponent {

  private value: ImageValuesObject = new ImageValuesObject();
  scrImage: string;
  src1: string;
  NewUrl: string;
  constructor(private appservice: AppService, private router: Router, private route: ActivatedRoute) {
    this.value = this.appservice.getImageValuesObject();
    console.log("value", this.value);
    let myArrStr = JSON.stringify(".." + this.value);
    var src = myArrStr;
    var temp = src.replace("http://localhost:4200", "");
    this.scrImage = temp;
    this.NewUrl = this.scrImage.replace(/['"]+/g, '');
    console.log("new url", this.NewUrl)
  }

  public ngAfterContentInit(): void {
    window.addEventListener('keydown', (e: any) => {
      if (e.which === 8) {
        e.preventDefault();
        this.router.navigate(['../home'], { relativeTo: this.route });

      }
    })
  }

}






