import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movieid : number = 0 ;
  shm:any = Array;

constructor(private service :DataService){ 

}
 onBackClicked(movie: string): void{
    this.shm = movie;
}
}