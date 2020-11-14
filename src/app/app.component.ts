import { Component, OnInit } from '@angular/core';
import { GithubReposService } from './github-repos.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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