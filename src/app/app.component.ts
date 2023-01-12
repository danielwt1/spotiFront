import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/loginSpoti/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'spotiFront';
  constructor(private _loginService: LoginService) {

  }


  ngOnInit(): void {
    this.login();
  }
  login() {
    console.log("Token Storage: " + localStorage.getItem('access_token'));
    //if (!localStorage.getItem('access_token')) {
      this._loginService.getAuthToken().subscribe((response: any) => {
        console.log(response)
        if (response.access_token) {
          console.log(response)
          const token = response.access_token;
          localStorage.setItem('access_token', token);
          console.log("Token Storage saved : " + localStorage.getItem('access_token'));

        }
      });
    //}
    /*setInterval(() => {
      this._loginService.getAuthToken().subscribe((response: any) => {
          if (response.access_token) {
            console.log(response)
            const token = response.access_token;
            localStorage.setItem('access_token', token);
          }
        });
    }, 100 * 1000);*/
    
  }
}
