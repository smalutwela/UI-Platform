import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  domain = "http://localhost:8080/";
  authToken;
  user;
  options;

  constructor(
    private http: HttpClient
  ) { }

  createAuthenticationHeaders() {
    this.loadToken(); // Get token so it can be attached to headers
    // Headers configuration options
    this.options = ({
      headers: new HttpHeaders({
        'Content-Type': 'application/json', // Format set to JSON
        'authorization': this.authToken // Attach token
      })
    });
  }

  loadToken() {
    this.authToken = localStorage.getItem('token');; // Get token and asssign to variable to be used elsewhere
  }

  registerUser(user) {
    return this.http.post(this.domain + 'authentication/register', user);
  }

  checkUsername(username) {
    return this.http.get(this.domain + 'authentication/checkUsername/' + username);
  }

  // Function to check if e-mail is taken
  checkEmail(email) {
    return this.http.get(this.domain + 'authentication/checkEmail/' + email);
  }

  login(user) {
    return this.http.post(this.domain + 'authentication/login', user);
  }

  logout() {
    this.authToken = null; 
    this.user = null; 
    localStorage.clear();
  }


  storeUserData(token, user) {
    localStorage.setItem('token', token); // Set token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Set user in local storage as string
    this.authToken = token; // Assign token to be used elsewhere
    this.user = user; // Set user to be used elsewhere
  }

  getProfile() {
    this.createAuthenticationHeaders(); // Create headers before sending to API
    return this.http.get(this.domain + 'authentication/profile', this.options);
  }

  loggedIn() {
    return tokenNotExpired();
  }

}
