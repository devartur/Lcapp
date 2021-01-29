import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { Inject } from "@angular/core";
import { Question } from "src/app/model/Question";
import { ApiService } from "src/app/shared/api.service";
import { QuestionsList } from '../../model/QuestionsList';
import {FormControl, Validators} from '@angular/forms';
import { MatSelectChange } from "@angular/material/select";

@Component({
  selector: 'app-user-questions',
  templateUrl: './user-questions.component.html',
  styleUrls: ['./user-questions.component.css']
})



export class UserQuestionsComponent implements OnInit {

  questionsListControl = new FormControl('', Validators.required);

  selectedQuestions : Question[] = [];
  userQuestionsLists : QuestionsList[] = [];
  selectedQuestionsList : QuestionsList;
  isQuestionListEmpty: boolean = true;


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
      if (this.userQuestionsLists.length > 0) {
        this.isQuestionListEmpty  = false;
      }
    },
    err => {
        alert("Błąd podczas odbierania danych.(uql_guql_1)");
    }        
    );
}

 
addQuestionsToQuestionsList():void{

  console.log("Id: "+ this.selectedQuestionsList.id);
  
  this.selectedQuestionsList.questions = this.selectedQuestions;
  //this.selectedQuestionsList.questions.forEach(oneQuestion=>console.log(oneQuestion.question));

  
  if (typeof this.selectedQuestionsList.questions !== 'undefined' && this.selectedQuestionsList.questions.length > 0 ) {
    this.apiService.postAddQuestionsToQuestionsList(this.selectedQuestionsList).subscribe(
      res => {
          alert('Pytania zostały dodane do listy: '+'\n' +this.selectedQuestionsList.name )
          location.reload();
      },
      err => {
          alert("Błąd podczas dodawania pytań do listy.");
          console.log(err);
      }
      )  

  } else {

    alert("Nie wybrałeś żadnego pytania, wybierz pytania a nstępnie dodaj je do listy.");
    
  }

  
}

selectedValue(event: MatSelectChange) {
  this.selectedQuestionsList = {
    id: event.value.id,
    name: event.source.triggerValue,
    description: null,
    creationBy: null,
    creationTime: null,
    questions: null,
  };
}

}
