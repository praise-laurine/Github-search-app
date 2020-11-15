import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  userName: string = ""
  
  @Output() searchTerm= new EventEmitter<any>();
  

  constructor() { }
 

  ngOnInit(): void {
  }

  search(){
    // this.searchOutput.emit(this.userName);
    this.userName = "";
  }
  

  
  
}
