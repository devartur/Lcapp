import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllQuestionsMenu } from "src/app/all-question/model/AllQuestionsMenu";
import { Question } from "src/app/all-question/model/Question";
import { ApiService } from "src/app/shared/api.service";
import { Pipe, PipeTransform } from '@angular/core';


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
    selectedQuestions : Question; // wyświetliś na oknie które pytania zostły aktualnie wybrane
    

  
constructor(private apiService : ApiService) { }

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

}



