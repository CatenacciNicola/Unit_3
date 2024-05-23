import { ActivatedRoute } from '@angular/router';
import { IJsonContent } from '../../Models/i-jason-content';
import { iPost } from './../../Models/ipost';
import { Component } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  currentPost!:iPost

  constructor(
    private route:ActivatedRoute)
  {}

  ngOnInit(){
    this.route.params.subscribe((params:any)=>{
      this.getPost(params.id)
    })

  }

  async getPost(id:number){
    const response=await fetch("../../../assets/db.json")
    const jsonContent=<IJsonContent> await response.json()
    const postTrovato=jsonContent.posts.find(post => post.id == id)
    if(postTrovato){
      this.currentPost=postTrovato
    }
  }

  goBack(){
    history.back();
  }

}
