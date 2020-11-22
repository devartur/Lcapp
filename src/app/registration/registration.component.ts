import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/shared/api.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {


  model: RegistrationViewModel = {
    userName: '',
    email: '',
    newPassword: '',
    newRepeatedPassword: ''
  };
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }
  registerUser(): void {

    this.apiService.registerUser(this.model).subscribe(
      res => {
        alert('Użytkownik: ' + '\n' + this.model.userName + '\n' + 'Została zarejestrowany.')
        location.reload();
      },
      err => {
        alert("Błąd podczas wysyłania wiadomości")
        console.log(err);
      }
    )
  }

}

export interface RegistrationViewModel {
  userName: string;
  email: string;
  newPassword: string;
  newRepeatedPassword: string;
}