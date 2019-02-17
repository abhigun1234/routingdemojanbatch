import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {RestaurentdetailsComponent} from './restaurentdetails/restaurentdetails.component'
import {RestaurentoverviewComponent} from './restaurentoverview/restaurentoverview.component'
const routes: Routes = [{path:'',component:HomeComponent}
,{path:'restro',component:HomeComponent

}
,{path:'restro/:id',component:RestaurentdetailsComponent,
children:[{path:'overview',component:RestaurentoverviewComponent},
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
