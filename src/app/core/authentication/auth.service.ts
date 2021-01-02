import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  "@angular/common/http";

@Injectable()
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/coyottebm/oauth/token';

  constructor(private http:HttpClient) { }

  loginss(login:string, senha:string) {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
                     .set('Authorization', 'Basic Y295b3R0ZWJtOmMweTA3N3QzQk0=');

     const body = `username=${login}&password=${senha}&grant_type=password`;

     return this.http.post(this.oauthTokenUrl, body, { headers, withCredentials:true });
  }
}
