import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';



@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private wikipedia: WikipediaService) {}

  onTerm(term: string){
    this.wikipedia.search(term).subscribe(response => {
      console.log(response);
    })
  }
}
