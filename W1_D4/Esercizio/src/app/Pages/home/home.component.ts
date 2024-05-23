import { Component } from '@angular/core';
import { iPost } from '../../Models/ipost';
import { IJsonContent } from '../../Models/i-jason-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  postsArr:iPost[]=[]
  randomPosts:iPost[]=[]

  ngOnInit(){
    this.getPosts()
  }

  async getPosts(){
    const response=await fetch("../../../assets/db.json")
    const posts=<IJsonContent>await response.json()
    this.postsArr=posts.posts;
    this.randomPosts=this.getRandomPosts()
  }

  getRandomPosts(): iPost[] {
    const shuffled = [...this.postsArr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  }

}
