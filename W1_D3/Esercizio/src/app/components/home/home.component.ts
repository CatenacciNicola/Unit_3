
import { Component } from '@angular/core';
import { iPost } from '../../Interface/post';
import {IJsonContent} from '../../Interface/i-json-content'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postsArr:iPost[]=[]
  firstPost!:iPost;
  randomPosts:iPost[]=[];

  ngOnInit(){
    this.getPosts()
  }

  async getPosts(){
    const response=await fetch("../../../assets/db.json")
    const posts=<IJsonContent> await response.json()
    this.postsArr=posts.posts
    let firstPost=this.getFirstPost()
    if (firstPost){
      this.firstPost=firstPost
    }
    this.randomPosts=this.getRandomPosts()
  }

  getFirstPost(){
    return this.postsArr.shift()
  }

  getRandomPosts(): iPost[] {
    const shuffled = [...this.postsArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }

}
