import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { GithubReposService } from '../github-repos.service';
import { Repos } from '../repository';
import { User } from "../user";



@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})

export class RepositoryComponent implements OnInit {




//   githubUserRepos: any =[];
//   constructor(public repoService : GithubReposService){
//     // this.getRepos();
//   }
//   ngOnInit():void {
//     this.getRepos();


//   }

//   getRepos(){
//   this.repoService. getgithubpublicREpos().subscribe(myRepos =>{
//     this.githubUserRepos = myRepos;
//     console.log(JSON.stringify(myRepos));

//   })
// }
// }
user: User;
repo: Repos;
constructor( public repoService: GithubReposService ) { }

repoSearch(userName){
  this.repoService.getgithubpublicREpos(userName).then(
    (results)=>{
      this.repo =this.repoService.allRepos
      console.log(this.repo);
    },
    (error)=>{
      console.log(error);
    }
  );
}

ngOnInit() {
  this.repoSearch('praise-laurine');
}


}