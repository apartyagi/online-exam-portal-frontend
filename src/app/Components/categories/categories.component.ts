import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from 'src/app/Services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  constructor(private _catSer:CategoryService,private route:ActivatedRoute,private sec:Router) { }

  ngOnInit(): void {
    this._catSer.get_all_category().subscribe((data:any)=>{
      this.category=data;
    },(error:any)=>{
      console.error(error);

    })
    this.id=this.route.snapshot.params.id;
  }
  id=0;

  edit(id:any){
      //this.sec.routerLink="upd-cat/"+id;
      this.sec.navigate([`/adam-dash/upd-cat/${id}`]);

  }

  delete(id:any){
  this._catSer.delete_cat(id).subscribe(
    (dat:any)=>{
    console.log("success69"+dat)},
    (err)=>{  
      console.error("error aa gyi"+err)})
  }






  category=[{
    id:'',
    title:'',
    description:'',
  }
]
 

}
