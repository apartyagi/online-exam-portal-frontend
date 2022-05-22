import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar,private _catServ:CategoryService) { }

  category={
    title:'',
    description:''
  }

  ngOnInit(): void {
  }
  public add_cat(){
    if(this.category.title=='' || this.category.description==''){
      this._snackBar.open("please Fill All Required Field","*");
    }else{
      this._catServ.add_category(this.category).subscribe((data:any)=>{
        Swal.fire("Success..","Category Added Succesfully.....!","success");
        this.category.description='';
        this.category.title='';
      },(error)=>{
        Swal.fire("Error!!","Something Wents Wrong.....!","error");
      });
    }
    
  }
}
