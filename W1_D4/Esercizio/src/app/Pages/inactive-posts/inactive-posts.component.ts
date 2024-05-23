import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { IJsonContent } from '../../Models/i-jason-content';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss'
})
export class InactivePostsComponent {
  inactiveArr:iPost[]=[]
  ngOnInit(){
    this.getInactivePosts()
  }

  async getInactivePosts(){
    const response=await fetch("../../../assets/db.json")
    const posts=<IJsonContent>await response.json()
    this.inactiveArr=(posts.posts).filter(post=>post.active===false)
    console.log("Post inattivi", this.inactiveArr)
  }
}
