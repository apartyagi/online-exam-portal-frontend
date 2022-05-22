import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private __login_service:LoginService) { }

  ngOnInit(): void {
  }

  public user_login_obj={
    username:'',
    password:''
  }
  log_user(){
    if(this.user_login_obj.username!=null && this.user_login_obj.password!=null ){

      this.__login_service.generate_token(this.user_login_obj).subscribe((success:any)=>{
          this.__login_service.savetoken(success.token);
            
              this.__login_service.fetchUserDetails().subscribe((data:any)=>{
                this.__login_service.setUser(data);
                
                if(this.__login_service.check_role()=="Normal"){
                  window.location.href='/norm-dash';
                }
                else if(this.__login_service.check_role()=="Admin"){
                    window.location.href='/adam-dash';
                }
                else{
                  this.__login_service.logout();
                }
            },(err:any)=>{
              this._snackBar.open("Something wents Wrong Plese Try Agin..");
            });
            

      },(error:any)=>{
        this._snackBar.open("Password or username wrong");
      });
    }

    
  }
}
