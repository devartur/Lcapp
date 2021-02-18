import { Component, OnInit } from '@angular/core';
import { Inject } from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { QuestionsList } from 'src/app/model/QuestionsList';
import { QuestionWithAddInfo } from 'src/app/model/QuestionWithAddInfo';
import { ApiService } from "src/app/shared/api.service";

@Component({
  selector: 'app-user-questions-list',
  templateUrl: './user-questions-list.component.html',
  styleUrls: ['./user-questions-list.component.css']
})
export class UserQuestionsListComponent implements OnInit {


  selectedQuestionsList: QuestionsList;
  userQuestionsWithAddInfo: QuestionWithAddInfo[] = [];

  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private apiService : ApiService) {
    this.selectedQuestionsList = data;
   }

  ngOnInit() {
    this.getQuestionsWithAddInfo();
  }
  
  public getQuestionsWithAddInfo():void{
    this.apiService.getQuestionsWithAddInfo(this.selectedQuestionsList.id).subscribe(
      res=> {
        this.userQuestionsWithAddInfo = res;
      },
      err =>{alert("Błąd podczas odbierania danych.(uq_qwai_1)")
      console.log(err);
    }
    );
}
}

