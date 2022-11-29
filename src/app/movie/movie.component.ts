import { Component , Input, Output, EventEmitter} from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  title = '';
  show:any = Array;
  @Input() idmovie: number = 0;
  @Output() tba: EventEmitter<string> = new EventEmitter<string>();
  

  constructor(private service :DataService){
    
  }
  onClick(){
    this.service.getmovie(this.idmovie).subscribe(res=>{
      this.show = res;
      this.tba.emit(this.show);

    })
  }
  

}