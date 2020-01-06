import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllQuestions } from "src/app/all-question/model/AllQuestions";
import { ApiService } from "src/app/shared/api.service";

///
import { Pipe, PipeTransform } from '@angular/core';

///

@Component({
  selector: 'app-all-question',
  templateUrl: './all-question.component.html',
  styleUrls: ['./all-question.component.css']
})
export class AllQuestionComponent implements OnInit {
    allQuestions : AllQuestions[] = [];
  
constructor(private apiService : ApiService) { }

  ngOnInit() {
      this.getAllQuestions();
  }
  
  
  public getAllQuestions(){
      this.apiService.getAllQuestions().subscribe(
      res => {
          
       
          
        this.allQuestions = res;  
      },
      err => {
          alert("Błąd podczas odbierania danych.")
      }        
      );
  }
}



