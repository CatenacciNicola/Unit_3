import { Component } from '@angular/core';
import {iPost} from '.../Interface/post'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  apiUrl:string=".../assets/db.json"

  postArr:iPost[]=[]

  ngOnInit(){

  }



}
