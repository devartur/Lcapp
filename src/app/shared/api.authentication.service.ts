import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { LoginViewModel } from '../login/login.component';

@Injectable()
export class AuthenticationService {

    private BASE_URL = "http://localhost:8080/api";
    private AUTHENTICATION_URL = `${this.BASE_URL}//user/authenticate`;

    constructor(private http: HttpClient) { }

    login(model:LoginViewModel) {
        return this.http.post<any>(this.AUTHENTICATION_URL, { username: model.email, password: model.password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    //zastanowić się nad zmianą przechowywania w sesji
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}