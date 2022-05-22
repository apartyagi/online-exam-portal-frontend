import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _log:LoginService) {
  
   }
   user={
    first_name:'',
    last_name:'',
    email:'',
    enable:'',
    id:'',
    username:'',
    phone:'',
    authorities:'',
    about:''

  }

  ngOnInit(): void {
    
  this.user= this._log.getUser();
  }
  

}
