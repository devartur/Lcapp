import { Component, OnInit } from '@angular/core';
import { QuestionDataToStatistics } from 'src/app/model/QuestionDataToStatistics';
import { QuestionsListStatistics } from 'src/app/model/QuestionsListStatistics';
import { QuestionsList } from 'src/app/model/QuestionsList';
import { ApiService } from "src/app/shared/api.service";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Inject } from "@angular/core";


@Component({
  selector: 'app-user-questions-list-statistics',
  templateUrl: './user-questions-list-statistics.component.html',
  styleUrls: ['./user-questions-list-statistics.component.css']
})
export class UserQuestionsListStatisticsComponent implements OnInit {

  selectedQuestionsList: QuestionsList;

  questionsListStatistics: QuestionsListStatistics;
  questionDataToStatistics: QuestionDataToStatistics[];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
  private apiService: ApiService) { 
    this.selectedQuestionsList = data;
  }

  ngOnInit() {
    this.getQuestionsListStatistics();
    this.getQuestionDataToStatistics();
  }

  public getQuestionsListStatistics(): void {
    this.apiService.getQuestionsListStatistics(this.selectedQuestionsList.id).subscribe(
      res => {
        this.questionsListStatistics = res;
      },
      err => {
        alert("Błąd podczas odbierania danych.(uqls_qls_1)")
      }
    );
  }

  public getQuestionDataToStatistics(): void {
    this.apiService.getQuestionDataToStatistics(this.selectedQuestionsList.id).subscribe(
      res => {
        this.questionDataToStatistics = res;
        
      },
      err => {
        alert("Błąd podczas odbierania danych.(udts_qls_1)")
        
      }
    );
  }


  markAsKnow(question : QuestionDataToStatistics, i:number){
   
    if(question.isQuestionMarkedAsKnow === "true"){
      this.apiService.updateQuestionWithAddInfo(new Map([[ "isMarkedAsKnow", false ]]),question.questionId).subscribe(
        res => {
          this.questionDataToStatistics[i].isQuestionMarkedAsKnow = "false";
        },
        err => {
          alert("Błąd podczas zmiany decyzji.");
          
        });

    }else{

      this.apiService.updateQuestionWithAddInfo(new Map([[ "isMarkedAsKnow", true ]]),question.questionId).subscribe(
        res => {
          this.questionDataToStatistics[i].isQuestionMarkedAsKnow = "true";
        },
        err => {
          alert("Błąd podczas zmiany decyzji.");
          
        });

    }
    
   

  }

}
