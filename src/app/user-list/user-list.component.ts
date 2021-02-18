import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { AnswerComponent } from 'src/app/answer/answer.component';
import { QuestionsList } from '../model/QuestionsList';
import { ApiService } from '../shared/api.service';
import { UserQuestionsListComponent } from './user-questions-list/user-questions-list.component';
import { AddUserQuestionsListComponent } from './add-user-questions-list/add-user-questions-list.component';
import { UserQuestionsListStatisticsComponent } from './user-questions-list-statistics/user-questions-list-statistics.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  allUserQuestionList : QuestionsList[] = [];
  selectedQuestionsList : QuestionsList;
  isQuestionListEmpty : boolean = true;

  constructor(
    private dialog : MatDialog,
    private apiService : ApiService
  ) { }

  ngOnInit() {
    this.getUserQuestionsLists();
  }
  
  public getUserQuestionsLists(){
    this.apiService.getUserQuestionsLists().subscribe(
    res => { 
      this.allUserQuestionList = res;  
      if (this.allUserQuestionList.length > 0) {
        this.isQuestionListEmpty  = false;
      }
    },
    err => {
        alert("Błąd podczas odbierania danych.(ul_guql_1)");
    }        
    );
}


  addUserQuestionList(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.minWidth = 500;
   this.dialog.open(AddUserQuestionsListComponent,dialogConfig);
  
  }

  openUserQuestionsList(selectedQuestionsList: QuestionsList) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.data = selectedQuestionsList;
    
   this.dialog.open(UserQuestionsListComponent,dialogConfig);
  }



  openStatisticUserQuestionsList(selectedQuestionsList: QuestionsList) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.data = selectedQuestionsList;

   this.dialog.open(UserQuestionsListStatisticsComponent,dialogConfig);
  }
  
}
