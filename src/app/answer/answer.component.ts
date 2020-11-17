import { Component, OnInit } from '@angular/core';
import { Question } from '../all-question/model/Question';

import { Inject } from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  oneQuestion: Question;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    
    this.oneQuestion = data;
    
  }

  ngOnInit() {
  }

}
