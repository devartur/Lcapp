import { Component, OnInit } from '@angular/core';
import { Inject } from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import { QuestionsList } from 'src/app/model/QuestionsList';
import { QuestionWithAddInfo } from 'src/app/model/QuestionWithAddInfo';
import { ApiService } from "src/app/shared/api.service";
import {MatExpansionModule} from '@angular/material/expansion';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-user-questions-list',
  templateUrl: './user-questions-list.component.html',
  styleUrls: ['./user-questions-list.component.css']
})
export class UserQuestionsListComponent implements OnInit {


  selectedQuestionsList: QuestionsList;
  userQuestionsWithAddInfo: QuestionWithAddInfo[] = [];

  basicAnswer:any;
  intermediateAnswer:any;
  advancedAnswer:any;
  question:any;
  sanitizer: DomSanitizer;

  myStyle: SafeHtml;

  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private apiService : ApiService,
  private s: DomSanitizer) {
    this.selectedQuestionsList = data;
    this.sanitizer = s;
   }

  ngOnInit() {
    this.getQuestionsWithAddInfo();
  }
  
  public getQuestionsWithAddInfo():void{
    this.apiService.getQuestionsWithAddInfo(this.selectedQuestionsList.id).subscribe(
      res=> {
        this.userQuestionsWithAddInfo = res;
        this.initFirstData();
      },
      err =>{alert("Błąd podczas odbierania danych.(uq_qwai_1)")
      console.log(err);
    }
    );
}

public initFirstData(){
  // this is for show correct forrmatter in innerhtml
  this.question = this.userQuestionsWithAddInfo[0].question;
  this.basicAnswer = this.sanitizer.bypassSecurityTrustHtml(this.userQuestionsWithAddInfo[0].basicAnswer);
  this.intermediateAnswer = this.sanitizer.bypassSecurityTrustHtml(this.userQuestionsWithAddInfo[0].intermediateAnswer);
  this.advancedAnswer = this.sanitizer.bypassSecurityTrustHtml(this.userQuestionsWithAddInfo[0].advancedAnswer);
}

}
