import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoriesComponent } from './Components/add-categories/add-categories.component';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { AddQuizzesComponent } from './Components/add-quizzes/add-quizzes.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { HomeDashComponent } from './Components/home-dash/home-dash.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { QuestionsComponent } from './Components/questions/questions.component';
import { QuizzesComponent } from './Components/quizzes/quizzes.component';
import { UpdateCategoryComponent } from './Components/update-category/update-category.component';
import { UpdateQuestionComponent } from './Components/update-question/update-question.component';
import { UpdateQuizComponent } from './Components/update-quiz/update-quiz.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { AdminDashboardComponent } from './Pages/Admin/admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { InstructionComponent } from './Pages/Normal/instruction/instruction.component';
import { NormalDashboardComponent } from './Pages/Normal/normal-dashboard/normal-dashboard.component';
import { ResultsComponent } from './Pages/Normal/results/results.component';
import { ShowerOfQuizComponent } from './Pages/Normal/shower-of-quiz/shower-of-quiz.component';
import { StartExamComponent } from './Pages/Normal/start-exam/start-exam.component';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { AdminGuardGuard } from './Services/admin-guard.guard';
import { NormalGuardGuard } from './Services/normal-guard.guard';

const routes: Routes = [
  {
    path:'', component:HomeComponent ,pathMatch:'full'
  },
  {
    path:'sign-up', component:SignUpComponent,pathMatch:'full'
  },
  {
    path:'login', component:LoginComponent,pathMatch:'full'
  },
  {
    path:'norm-dash', component:NormalDashboardComponent,canActivate:[NormalGuardGuard],children:[
      {
        path:'',
        component:WelcomeComponent
      },
      {
        path:'quiz/:id',
        component:ShowerOfQuizComponent
      },
      {
        path:'instruction/:quiz_id',
        component:InstructionComponent
      },{
        path:'resu',
        component:ResultsComponent
      }
    ]
  },
  {
    path:'start-exam/:id',
    component:StartExamComponent,
    canActivate:[NormalGuardGuard]
  },
  {
    path:'adam-dash', component:AdminDashboardComponent,canActivate:[AdminGuardGuard],children:[
      
      {
        path:'',
        component:WelcomeComponent
      }
      ,{
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'home',
        component:HomeDashComponent
      },
      {
        path:'cat',
        component:CategoriesComponent
      },
      {
        path:'addcat'
        ,component:AddCategoriesComponent
      },
      {
        path:'quizz',
        component:QuizzesComponent
      },
      {
        path:'addquizz',
        component:AddQuizzesComponent
      },{
        path:'ques/:quid'
        ,component:QuestionsComponent
      },{
        path:'addques/:quiz_id',
        component:AddQuestionComponent
      },
      {
        path:'upd-cat/:id',
        component:UpdateCategoryComponent
      },
      {
        path:'upd-qui/:idq',
        component:UpdateQuizComponent
      },
      {
        path:'upd-ques/:que_id',
        component:UpdateQuestionComponent
      },
      //Op Configuration
    ],
  }
         
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
