import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './Pages/sign-up/sign-up.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthIntercepterProvider } from './Services/auth-intercepter.interceptor';
import { AdminDashboardComponent } from './Pages/Admin/admin-dashboard/admin-dashboard.component';
import { NormalDashboardComponent } from './Pages/Normal/normal-dashboard/normal-dashboard.component';
import { SidebarComponent } from './Pages/Admin/sidebar/sidebar.component';
import {MatCardModule} from '@angular/material/card';
import { ProfileComponent } from './Components/profile/profile.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { AddCategoriesComponent } from './Components/add-categories/add-categories.component';
import { AddQuizzesComponent } from './Components/add-quizzes/add-quizzes.component';
import { QuizzesComponent } from './Components/quizzes/quizzes.component';
import { HomeDashComponent } from './Components/home-dash/home-dash.component';
import {MatSelectModule} from '@angular/material/select';
import { QuestionsComponent } from './Components/questions/questions.component';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { UpdateCategoryComponent } from './Components/update-category/update-category.component';
import { UpdateQuizComponent } from './Components/update-quiz/update-quiz.component';
import { UpdateQuestionComponent } from './Components/update-question/update-question.component';
import {MatRippleModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { SideBarComponent } from './Pages/Normal/side-bar/side-bar.component';
import { ShowerOfQuizComponent } from './Pages/Normal/shower-of-quiz/shower-of-quiz.component';
import { InstructionComponent } from './Pages/Normal/instruction/instruction.component';
import { StartExamComponent } from './Pages/Normal/start-exam/start-exam.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from "ngx-ui-loader";
import { ResultsComponent } from './Pages/Normal/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AdminDashboardComponent,
    NormalDashboardComponent,
    SidebarComponent,
    ProfileComponent,
    WelcomeComponent,
    CategoriesComponent,
    AddCategoriesComponent,
    AddQuizzesComponent,
    QuizzesComponent,
    HomeDashComponent,
    QuestionsComponent,
    AddQuestionComponent,
    UpdateCategoryComponent,
    UpdateQuizComponent,
    UpdateQuestionComponent,
    SideBarComponent,
    ShowerOfQuizComponent,
    InstructionComponent,
    StartExamComponent,
    ResultsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatRadioModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatTableModule,
    MatSelectModule,
    MatGridListModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    NgxUiLoaderModule,
    HttpClientModule,
    NgxUiLoaderModule, 
    NgxUiLoaderHttpModule.forRoot({
      showForeground:true,
    })
  ],
  providers: [AuthIntercepterProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
