import { Component, OnInit } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  category={
    id:'',
    title:'',
    description:''
  }

  constructor(private _catSerx:CategoryService,private _snack:MatSnackBar,private rou:ActivatedRoute,private rouute:Router) { }
  id=0;
  ngOnInit(): void {
    this.id=this.rou.snapshot.params.id;
    this.load_data(this.id);
  }

  load_data(id:any){
    this._catSerx.get_single_cat(id).subscribe((dat:any)=>{
      this.category=dat;
    },(err:any)=>{console.log("Errr")});
  }

  upd_cat(){

    if(this.category.title=='' || this.category.description==''){
      this._snack.open("Please Fill All Field");
    }
    else{
      this._catSerx.update_category(this.category).subscribe((data:any)=>{
        Swal.fire("Sucess..","Category Update Sucesfully","success").then((e)=>{
          this.rouute.navigate(['/adam-dash/cat']);
        });
        
      },(error:any)=>{
        Swal.fire("Error!!.","Faliure occur","error");
      })
    } 
  }
  
  

}
