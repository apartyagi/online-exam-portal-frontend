import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserRegisterService } from 'src/app/Services/user-register.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private user_ser:UserRegisterService,private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    
  }

  public userdetail={
      last_name:'',
      first_name:'',
      username:'',
      email:'',
      phone:'',
      password:'',
      conform_password:'',
      about:''
  }
  
  func(){
    if(this.userdetail==null || this.userdetail.username==''){
      this._snackBar.open("Please Fill All Details Correctly","X",{verticalPosition:'top',
      horizontalPosition:'right',duration:3000});
    }
    else{
      if(this.userdetail.password!=this.userdetail.conform_password){
        this._snackBar.open("Password Didn't Match","",
        {
          verticalPosition:'top',
          horizontalPosition:'right',
          duration:3000
        });
      }
      else{
        this.user_ser.create_user_data_post(this.userdetail).subscribe(
          (data)=>{
            Swal.fire('','Account created Successfully','success');
            setTimeout(()=>{
              window.location.href='/login';
            },1000) 
            
          },
          (error)=>{
            Swal.fire('','Something Wents Wrong..',"error");
          }
        )
      }
      
    }
    
  }

}
