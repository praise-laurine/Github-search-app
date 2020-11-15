import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubReposService } from "../github-repos.service";
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  userName: string = ""
  
  @Output() searchTerm= new EventEmitter<any>();
  

  constructor(private repoService: GithubReposService  ) { }
 

  ngOnInit(): void {
  }

  search(){
    this.searchTerm.emit(this.userName);
    this.userName = "";
  }
  

  
  
}
