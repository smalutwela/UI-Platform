import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  registerUser(user) {
    return this.http.post(this.domain + '/authentication/register', user);
  }

  checkUsername(username) {
    return this.http.get(this.domain + '/authentication/checkUsername/' + username);
  }

  // Function to check if e-mail is taken
  checkEmail(email) {
    return this.http.get(this.domain + '/authentication/checkEmail/' + email);
  }

}
