import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'
@Component({
  selector: 'app-restaurentdetails',
  templateUrl: './restaurentdetails.component.html',
  styleUrls: ['./restaurentdetails.component.css']
})
export class RestaurentdetailsComponent implements OnInit {
public restroid;
  constructor(private arouter :ActivatedRoute,private router : Router) { }

  ngOnInit() {

   let id= this.arouter.snapshot.paramMap.get('id');
    this.restroid=id
  }
  /*
  nevaigate back to the restaourent home
  */
  private goPrivious()
  {
   //this.router

  }
  /*
  nevaigate  to the  next restaourent home
  */
  private goNext()
  {

  }
  showRestaurentDetails()
  {
   this.router.navigateByUrl('/overview')
  }


}
