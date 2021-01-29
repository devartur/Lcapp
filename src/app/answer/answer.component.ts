import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { Question } from '../model/Question';

import { Inject } from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatExpansionModule} from '@angular/material/expansion';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css'],
  
})
export class AnswerComponent implements OnInit {

  myStyle: SafeHtml;

  oneQuestion: Question;
  basicAnswer:any;
  intermediateAnswer:any;
  advancedAnswer:any;
  question:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private sanitizer: DomSanitizer) { 
    
    this.oneQuestion= data;

    // this is for show correct forrmatter in innerhtml
    this.basicAnswer = sanitizer.bypassSecurityTrustHtml(this.oneQuestion.basicAnswer);
    this.intermediateAnswer = sanitizer.bypassSecurityTrustHtml(this.oneQuestion.intermediateAnswer);
    this.advancedAnswer = sanitizer.bypassSecurityTrustHtml(this.oneQuestion.advancedAnswer);
    this.question = sanitizer.bypassSecurityTrustHtml(this.oneQuestion.question);
  }
  ngOnInit() {
  }

}
