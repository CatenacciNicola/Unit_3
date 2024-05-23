import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { IJsonContent } from '../../Models/i-jason-content';


@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss'
})
export class ActivePostsComponent {

  activeArr:iPost[]=[]

  ngOnInit(){
    this.getActivePosts()
  }

  async getActivePosts(){
    const response=await fetch("../../../assets/db.json")
    const posts=<IJsonContent> await response.json()
    let postsArr=posts.posts

    console.log("Tutti i posts",postsArr)
    this.activeArr=postsArr.filter(post=>post.active===true)
    console.log("Post attivi", this.activeArr)
  }

}
