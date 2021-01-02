import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  "@angular/common/http";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {

  oauthTokenUrl = 'http://localhost:8080/coyottebm/oauth/token';
  jwtPayload:any;

  constructor(private http:HttpClient,
              private jwtHelper: JwtHelperService) {
              this.carregarToken();  
              }

  public login(login:string, senha:string) {
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/x-www-form-urlencoded')
                       .set('Authorization', 'Basic Y295b3R0ZWJtOmMweTA3N3QzQk0=');

      const body = `username=${login}&password=${senha}&grant_type=password`;

      this.http.post(this.oauthTokenUrl, body, { headers, withCredentials:true }).subscribe(response=>{
        this.amarzenarToken(response['access_token']);
      },
      (err)=>{
        console.log(err);
      }
    )
  }

  private amarzenarToken(token:string) {
    this.jwtPayload = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  private carregarToken(){
    const token = localStorage.getItem('token');

    if(token) {
      this.amarzenarToken(token);
    }
  }
}
