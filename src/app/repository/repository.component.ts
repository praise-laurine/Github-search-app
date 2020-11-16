import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { GithubReposService } from '../github-repos.service';
import { Repos } from '../repository';
import { Users } from "../users";



@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})

export class RepositoryComponent implements OnInit {

users: Users;
repo: Repos;
constructor( public repoService: GithubReposService ) { }


repoSearch(userName){
  this.repoService.repoSearch(userName).then(
    ( success)=>{
      this.users = this.repoService.searchUser;
    },
    (error)=>{
    }
   )
   this.repoService.getgithubpublicREpos(userName).then(
     ( success)=>{
       this.repo = this.repoService.allRepos;
     },
     (error)=>{
       console.log(error)
     }
    )
 }
ngOnInit() {
  this.repoSearch('praise-laurine');
}


}