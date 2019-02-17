import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  restorents=[
    {"id":1,"name":"Hydrabaad Biryani",
    "address":"Hinjewadi"},
    {"id":2,"name":"Meza Nine",
    "address":"Hinjewadi"},
    {"id":3,"name":"Karolbag The Dhabba",
    "address":"Hinjewadi"},
    {"id":4,"name":"sivar garden",
    "address":"pimple"},
    {"id":5,"name":"Sondraya Garden",
    "address":"pimple"},
    {"id":6,"name":"Govind Garden",
    "address":"pimple"},
    {"id":7,"name":"rajmudra garden",
    "address":"pimple"}
  ]
  constructor(private router:Router) { }
  goToRestorent(restro)
  {
   //alert("hello")
   this.router.navigate(['/restro',restro.id])
  }
  ngOnInit() {
  }

}
