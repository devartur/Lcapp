import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { Question } from "src/app/all-question/model/Question";
import { ApiService } from "src/app/shared/api.service";
import { QuestionsList } from '../all-question/model/QuestionsList';

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.css']
})
export class UserQuestionsComponent implements OnInit {

  selectedQuestions : Question[] = [];
  userQuestionsLists : QuestionsList[] = [];


  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private apiService : ApiService
 ) { 
    
    this.selectedQuestions= data;

  }

  ngOnInit() {
    this.getUserQuestionsLists();
  }


  public getUserQuestionsLists(){
    this.apiService.getUserQuestionsLists().subscribe(
    res => { 
      this.userQuestionsLists = res;  
    },
    err => {
        alert("Błąd podczas odbierania danych.(uql_guql_1)");
        console.log(err);
    }        
    );
}

}
