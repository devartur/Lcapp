
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/shared/api.service";
import { QuestionsList } from 'src/app/model/QuestionsList';

@Component({
  selector: 'app-add-user-questions-list',
  templateUrl: './add-user-questions-list.component.html',
  styleUrls: ['./add-user-questions-list.component.css']
})
export class AddUserQuestionsListComponent implements OnInit {

  model: QuestionsList = {
    id:'',
    name:'',
    description:'',
    questions:undefined,
    creationBy:'',
    creationTime:''
};

  constructor(
    private apiService : ApiService
  ) { }

  ngOnInit() {
  }

  addUserQuestionsList():void{
    this.apiService.addUserQuestionsList(this.model).subscribe(
    res => {
        alert('Lista: '+'\n' +this.model.name+ '\n' + 'Została dodana.' )
        location.reload();
    },
    err => {
        alert("Błąd podczas dodawania listy.")
        console.log(err);
    }
    )
}


}



