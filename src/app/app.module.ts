import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { showImageComponent } from './showImage.component';
import { AppService } from '../services/app.service';
import { HttpClientModule } from '@angular/common/http';
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    showImageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,HttpModule,HttpClientModule,
    routing
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }


