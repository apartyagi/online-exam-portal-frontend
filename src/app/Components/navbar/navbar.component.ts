import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private _logserv: LoginService, private router: Router) {}

  User = {
    id: 9,
    first_name: 'pop',
    last_name: 'Tyagi',
    password: '$2a$10$uM70YUaQD5hubocLbaknTObUlPse2vAKXm3qWqUY2XrHFeaWh/BEW',
    email: 'pop@angular.com',
    phone: '9999999999',
    about: 'i am pop admin',
    username: 'pop',
    enable: true,
    enabled: true,
    authorities: [
      {
        authority: 'Admin',
      },
    ],
    credentialsNonExpired: true,
    accountNonExpired: true,
    accountNonLocked: true,
  };

  ngOnInit(): void {}

  pop() {
    let result: boolean = this._logserv.isloggedIn();
    return result;
  }
  logout() {
    this._logserv.logout();
    this.router.navigate(['login']);
  }

  check_user_type() {
    this._logserv.fetchUserDetails().subscribe(
      (data: any) => {
        this.User=data;
      },
      (error: any) => {
        console.log("Error at Fetching data");
        this.logout();
      }
    );
  }

  check_permission(){
    let rol=this._logserv.check_role();
    if(rol=='Admin'){
      return true;
    }
    else{
      return false;
    }
  }

}
