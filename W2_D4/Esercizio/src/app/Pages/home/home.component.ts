import { Component } from '@angular/core';
import { PhotoService } from '../../Services/photo-service.service';
import { IPhotos } from '../../Modules/i-photos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  photosArr:IPhotos[]=[]
  favourite:number=0

  constructor(private photoSvc:PhotoService){}

  ngOnInit(){
    this.photoSvc.get30().subscribe(photo=>{
        this.photosArr = photo;
      },
    );
  }

  delete(id:number){
    this.photoSvc.delete(id).subscribe(()=>{
      this.photosArr=this.photosArr.filter(p=>p.id != id)
      console.log("pizza eliminata")
    })
  }

  addFavourite(){
    return this.favourite=this.favourite+1
  }

}
