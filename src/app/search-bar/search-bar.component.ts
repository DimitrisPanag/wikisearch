import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent implements OnInit {

  @Output() submitted = new EventEmitter<string>();

  term = '';

  constructor() {}

  ngOnInit() {}

  onFormSubmit(event: any){
    event.preventDefault();
    this.submitted.emit(this.term);
  }

}
