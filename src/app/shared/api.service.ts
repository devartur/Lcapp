import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { AllQuestions } from "src/app/all-question/model/AllQuestions";
import {FeedbackViewModel} from "../feedback/feedback.component";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    
    private BASE_URL = "http://localhost:8080/api";
    private ALL_QUESTIONS_URL = `${this.BASE_URL}/all-question`;
    private SEND_FEEDBACK_URL = `${this.BASE_URL}/feedback`;
    
  constructor(private http : HttpClient) { }
  
  
  getAllQuestions() : Observable<AllQuestions[]>{
      return  this.http.get<AllQuestions[]>(this.ALL_QUESTIONS_URL);
      
  }
  
  postFeedback(feedback : FeedbackViewModel) : Observable<any>{
      return this.http.post(this.SEND_FEEDBACK_URL, feedback);
  }
}
