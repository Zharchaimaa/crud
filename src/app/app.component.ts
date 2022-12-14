import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './auth/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  roles: string[];
  authority: string;

  constructor(private tokenStorage: TokenStorageService,private route : Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          this.route.navigate(['dashboard']);
          return false;
        } else if (role === 'ROLE_USER') {
          this.authority = 'user';
          this.route.navigate(['home']);
          return false;
        }
        
      });
    }
  }
}
