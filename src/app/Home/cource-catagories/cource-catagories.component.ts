import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../Service/api.service';

@Component({
  selector: 'app-cource-catagories',
  templateUrl: './cource-catagories.component.html',
  styleUrls: ['./cource-catagories.component.css']
})
export class CourceCatagoriesComponent implements OnInit {
  public carditems :any;
  constructor( private api :ApiService){

  }
  ngOnInit():void{

  this.api.getProduct().subscribe(res=>{
    this.carditems = res;
    console.log(res);
  })
  }
}
