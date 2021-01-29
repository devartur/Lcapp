import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { AnswerComponent } from 'src/app/answer/answer.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(
    private dialog : MatDialog
  ) { }

  ngOnInit() {
  }
  

  addUserQuestionList(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.minHeight = 200;
   this.dialog.open(AnswerComponent,dialogConfig);
  
  }
  
}
