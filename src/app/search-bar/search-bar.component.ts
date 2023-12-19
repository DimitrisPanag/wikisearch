import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {

  term = '';

  constructor() {}

  ngOnInit() {}

  onFormSubmit(event: any){
    event.preventDefault();
    console.log(this.term);
  }

}
