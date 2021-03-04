import { Component, OnInit } from '@angular/core';
import { Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { QuestionsList } from 'src/app/model/QuestionsList';
import { QuestionWithAddInfo } from 'src/app/model/QuestionWithAddInfo';
import { ApiService } from "src/app/shared/api.service";
import { MatExpansionModule } from '@angular/material/expansion';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-user-questions-list',
  templateUrl: './user-questions-list.component.html',
  styleUrls: ['./user-questions-list.component.css']
})
export class UserQuestionsListComponent implements OnInit {

  selectedQuestionsList: QuestionsList;
  userQuestionsWithAddInfo: QuestionWithAddInfo[] = [];
  questionNumber: number = 0;
  repeatInValue: number;

  questionId: string;

  basicAnswer: any;
  intermediateAnswer: any;
  advancedAnswer: any;
  question: any;

  userNote: string;
  nextAnswerDateTime: Date;
  firstAnswerDateTime: Date;
  markedAsKnowDateTime: Date;
  isMarkedAsKnow: boolean;

  updateQuestion: Map<string, any> = new Map<string, any>();

  sanitizer: DomSanitizer;


  myStyle: SafeHtml;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private apiService: ApiService,
    private s: DomSanitizer) {
    this.selectedQuestionsList = data;
    this.sanitizer = s;
  }

  ngOnInit() {
    this.getQuestionsWithAddInfo();
  }

  public getQuestionsWithAddInfo(): void {
    this.apiService.getQuestionsWithAddInfo(this.selectedQuestionsList.id).subscribe(
      res => {
        this.userQuestionsWithAddInfo = res;
        if (typeof this.userQuestionsWithAddInfo !== 'undefined' && this.userQuestionsWithAddInfo.length > 0) {
          this.setDataForQuestion(0);
        }

      },
      err => {
        alert("Błąd podczas odbierania danych.(uq_qwai_1)")
        console.log(err);
      }
    );
  }

  public setDataForQuestion(number: number) {

    this.questionId = this.userQuestionsWithAddInfo[number].questionId;
    this.question = this.userQuestionsWithAddInfo[number].question;
    // this is for show correct forrmatter in innerhtml
    this.basicAnswer = this.sanitizer.bypassSecurityTrustHtml(this.userQuestionsWithAddInfo[number].basicAnswer);
    this.intermediateAnswer = this.sanitizer.bypassSecurityTrustHtml(this.userQuestionsWithAddInfo[number].intermediateAnswer);
    this.advancedAnswer = this.sanitizer.bypassSecurityTrustHtml(this.userQuestionsWithAddInfo[number].advancedAnswer);
    this.userNote = this.userQuestionsWithAddInfo[number].userNote;

    this.questionNumber = this.questionNumber+1;
  }

  repeatIn(event: any) {
    this.repeatInValue = event.value;
  }


  markAsKnow() {

     
    if (typeof this.userQuestionsWithAddInfo !== 'undefined' && this.userQuestionsWithAddInfo.length > this.questionNumber) {
      this.apiService.updateQuestionWithAddInfo(new Map([[ "isMarkedAsKnow", true ]]),this.questionId).subscribe(
        res => {
          if (typeof this.userQuestionsWithAddInfo !== 'undefined' && this.userQuestionsWithAddInfo.length > this.questionNumber) {
            this.setDataForQuestion(this.questionNumber);
          }
        },
        err => {
          alert("Błąd podczas dodawania listy.");
          
        }
      );
    }else{
      alert("Koniec pytań dla tej listy na dzisiaj.")
      location.reload();
    }

    
  }


  addNote() {
    console.log("Notatka");
  }
}