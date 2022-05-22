import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/Services/category.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  category=[
    {
      id:'',
      title:''
    }
  ];
  constructor(private _catSer:CategoryService,private logSer:LoginService) { }

  ngOnInit(): void {
    this._catSer.get_all_category().subscribe((dat:any)=>{
      this.category=dat;
    },(err:any)=>{
      this.logSer.logout();
    });
  }
  


}
