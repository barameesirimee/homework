import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idata } from './idata';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  getmovie(Movieid:number): Observable<Array<Idata>> {
    return this.http.get<Array<Idata>>("https://638492184ce192ac605bc39a.mockapi.io/Movie/"+ Movieid);
    
  }
  
  
}
