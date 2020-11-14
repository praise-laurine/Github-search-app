import { Component, OnInit } from '@angular/core';
import { GithubReposService } from '../github-repos.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})

export class RepositoryComponent implements OnInit {


title = 'github-serach';

  githubUserRepos: any =[];
  constructor(private repoService : GithubReposService){
    // this.getRepos();
  }
  ngOnInit():void {
    this.getRepos();


  }

  getRepos(){
  this.repoService. getgithubpublicREpos().subscribe(myRepos =>{
    this.githubUserRepos = myRepos;
    console.log(JSON.stringify(myRepos));

  })
}
}

