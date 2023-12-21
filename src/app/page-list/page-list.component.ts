import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-list',
  standalone: false,
  templateUrl: './page-list.component.html',
  styleUrl: './page-list.component.css'
})
export class PageListComponent implements OnInit {
  @Input() pages = [] as any[];

  constructor() {}

  ngOnInit(){}

}
