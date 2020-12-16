import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllQuestionsMenu } from "src/app/all-question/model/AllQuestionsMenu";
import { Question } from "src/app/all-question/model/Question";
import { ApiService } from "src/app/shared/api.service";
import { Pipe, PipeTransform } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { AnswerComponent } from '../answer/answer.component';
import { UserQuestionsComponent } from '../user-questions/user-questions.component';


@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {
    allQuestionsMenu : AllQuestionsMenu[] = [];
    public isCollapsed: boolean [] = [];
    numbersAllQuestions : number;

    allQuestions : Question[] = [];
    selectedQuestionList : Question[] = [];
  

constructor(private apiService : ApiService, private dialog : MatDialog) { }

  ngOnInit() {
      this.getAllQuestionsMenu();
      this.getAllQuestions();
  }
  


  public getAllQuestionsMenu(){
      this.apiService.getAllQuestionsMenu().subscribe(
      res => { 
        this.allQuestionsMenu = res;  
        this.numbersAllQuestions = this.allQuestionsMenu.length+1;
      },
      err => {
          alert("Błąd podczas odbierania danych.(alq_gaqm_1)")
      }        
      );
  }


  public getAllQuestions(){
    this.apiService.getAllQuestions().subscribe(
      res => { 
        this.allQuestions = res;  
      },
      err => {
          alert("Błąd podczas odbierania danych.(alq_gaq_1)")
      }        
      );
  }


selectQuestion(firstLevel: string, level : string) {
 
  this.apiService.getSelectedQuestion(firstLevel, level).subscribe(
    res=> {
      this.selectedQuestionList = res;
    },
    err =>{alert("Błąd podczas odbierania danych.(alq_sq_1)")}
  );
}

showAnswer(question: Question) {
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  dialogConfig.data = question;
 this.dialog.open(AnswerComponent,dialogConfig);
}


addQuestionsToUserQuestions(selectedQuestionList : Question[]){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = false;
  dialogConfig.data = selectedQuestionList;
 this.dialog.open(UserQuestionsComponent,dialogConfig);
}

}





