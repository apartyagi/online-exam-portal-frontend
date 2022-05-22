import { Component, OnInit } from '@angular/core';
import { AnswerService } from 'src/app/Services/answer.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private _resuSer:AnswerService,private _logSer:LoginService) { }

  userdet={
    id:''
  }
  user_result_det=[
    {
      id: 48,
      userdata: {
          id: 3,
          first_name: "Apar",
          last_name: "Tyagi",
          password: "$2a$10$8bia5/9ANtDO7TeqqXpUYuOPrhWQusVGTrBIp6kuNNsCUzULltN7O",
          email: "apar@angular.com",
          phone: "9818796703",
          about: "i am apara",
          username: "apara",
          enable: true,
          enabled: true,
          authorities: [
              {
                  "authority": "Normal"
              }
          ],
          accountNonLocked: true,
          accountNonExpired: true,
          credentialsNonExpired: true
      },
      quizdata: {
          id: 32,
          active: true,
          title: "mixi",
          description: "how to made mixi at home",
          max_marks: "500",
          no_of_question: "100",
          category: {
              "id": 13,
              "title": "home",
              "description": "hellio bro i am home"
          }
      },
      result: "pass",
      marks_get: "20",
      marks_obtained: "100"
  },
  ];
  objer:any;

  ngOnInit(): void {
    this._logSer.fetchUserDetails().subscribe((data:any)=>{
      this.userdet=data;
    },(err:any)=>{
      this._logSer.logout();
    })
    this.fetch_all_given_quiz();
  }

  fetch_all_given_quiz(){
    this._resuSer.fetch_all_quiz(3).subscribe((data:any)=>{  
      this.user_result_det=data;
      this.objer=data;
    },(err:any)=>{

    });
  }

}
