import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Valid } from '../classes/valid';
import { User } from '../classes/user'

@Injectable({
  providedIn: 'root'
})
export class LoginInterfaceService {

  constructor(private httpClient : HttpClient) { }

  tryLogin(username : string, password : string, mail : string, name : string, surname : string) {
    let http_headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post<Valid>("http://127.0.0.1:8080/login",
     '{"username":"' + username + 
     '", "password":"' + password +
     '", "email":"' + mail +
     '", "name":"' + name +
     '", "surname":"' + surname +
      '"}', {headers:http_headers});
  }

  register(username : string, password : string, mail : string, name : string, surname : string) {
    let http_headers = new HttpHeaders().set("Content-Type", "application/json");
    return this.httpClient.post<User>("http://127.0.0.1:8080/register",
    '{"username":"' + username + 
    '", "password":"' + password +
    '", "email":"' + mail +
    '", "name":"' + name +
    '", "surname":"' + surname +
     '"}', {headers:http_headers});
  }
}
