import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, map } from 'rxjs';
import { IPhotos } from '../Modules/i-photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiUrl:string="https://jsonplaceholder.typicode.com/photos"

  prefSubject=new Subject<IPhotos>()
  pref=this.prefSubject.asObservable()


  constructor(private http:HttpClient) { }

  get30(): Observable<IPhotos[]> {
    return this.http.get<IPhotos[]>(this.apiUrl).pipe(
      map((photos: IPhotos[]) => photos.slice(50, 80)) // Prende solo gli oggetti da indice 50 a 100
    );
  }

  delete(id:number):Observable<IPhotos>{
    return this.http.delete<IPhotos>(`${this.apiUrl}/${id}`)
  }


}
