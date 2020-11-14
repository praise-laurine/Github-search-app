import { Injectable } from '@angular/core';
// import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubReposService {

  constructor(private http:HttpClient) { }
  getgithubpublicREpos(){
    const username = 'praise-laurine'
    return this.http.get( `https://api.github.com/users/${username}/repos?access_token=d40f25f5f47b6afefb9d3381eecae433994b2fa7 `);
  }
}
