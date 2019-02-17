import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurentdetailsComponent } from './restaurentdetails/restaurentdetails.component';
import { HomeComponent } from './home/home.component';
import { RestaurentoverviewComponent } from './restaurentoverview/restaurentoverview.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurentdetailsComponent,
    HomeComponent,
    RestaurentoverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
