import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ActivePostsComponent } from './Pages/active-posts/active-posts.component';
import { InactivePostsComponent } from './Pages/inactive-posts/inactive-posts.component';
import { Page404Component } from './Pages/page404/page404.component';
import { DetailComponent } from './Pages/detail/detail.component';

const routes: Routes = [
  {path:"",
    component:HomeComponent,
    title:"Home",
    pathMatch:"full"
  },
  {path:"active-post",
    component:ActivePostsComponent,
    title:"active-posts"
  },
  {path:"inactive-post",
  component:InactivePostsComponent,
  title:"inactive-posts"
  },
  {path:"details/:id",
   component:DetailComponent,
   title:"details"
  },
  {path:"**",
    component:Page404Component,
    title:"404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
