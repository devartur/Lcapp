import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { AllQuestionsMenu } from "src/app/all-question/model/AllQuestionsMenu";
import { Question } from "src/app/all-question/model/Question";
import {FeedbackViewModel} from "../feedback/feedback.component";
import { RegistrationViewModel } from '../registration/registration.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    
    private BASE_URL = "http://localhost:8080/api";
    private ALL_QUESTIONS_MENU_URL = `${this.BASE_URL}/all-questions-menu`;
    private ALL_QUESTIONS_URL = `${this.BASE_URL}/all-questions`;
    private SELECTED_QUESTIONS_URL = `${this.BASE_URL}/selected-questions/`;
    private SEND_FEEDBACK_URL = `${this.BASE_URL}/feedback`;
    private ADD_NEW_USER_URL = `${this.BASE_URL}/user/register`;
    
  constructor(private http : HttpClient) { }
  

  getSelectedQuestion(firstLevel: string, level: string) : Observable<Question[]> {
    let params = new HttpParams()
    .set('firstLevelValue', firstLevel)
    .set('level', level);
    return  this.http.get<Question[]>(this.SELECTED_QUESTIONS_URL, {params});
  }

  // getNotesByNotebook(notebookId: string): Observable<Note[]> {
   // return this.http.get<Note[]>(this.NOTES_BY_NOTEBOOK_URL + notebookId);
 // }

  
  getAllQuestionsMenu() : Observable<AllQuestionsMenu[]>{
      return  this.http.get<AllQuestionsMenu[]>(this.ALL_QUESTIONS_MENU_URL);
      
  }

  getAllQuestions() : Observable<Question[]>{
    return  this.http.get<Question[]>(this.ALL_QUESTIONS_URL);
    
}


  
  postFeedback(feedback : FeedbackViewModel) : Observable<any>{
      return this.http.post(this.SEND_FEEDBACK_URL, feedback);
  }
  registerUser(newUser : RegistrationViewModel) : Observable<any>{
    newUser.newRepeatedPassword = newUser.newPassword;
    return this.http.post(this.ADD_NEW_USER_URL, newUser);
}
}
