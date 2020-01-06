import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/shared/api.service";


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

    model:FeedbackViewModel = {
        subject:'',
        email:'',
        feedback:''
    };
  constructor(private apiService : ApiService) { }

  ngOnInit() {
  }
   sendFeedback():void{
       this.apiService.postFeedback(this.model).subscribe(
       res => {
           alert('Wiadomość: '+'\n' +this.model.subject+ '\n' + 'Została wysłana.' )
           location.reload();
       },
       err => {
           alert("Błąd podczas wysyłania wiadomości")
       }
       )
  }

}

export interface FeedbackViewModel{
    subject:string;
    email:string;
    feedback:string;

}