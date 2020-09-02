import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ngx-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  username;
  email;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe((profile:any) => {
      this.username = profile.user.username; 
      this.email = profile.user.email; 
    });
  }

}
