import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginInterfaceService } from '../../services/login-interface.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private login_interface : LoginInterfaceService) {}

  username : string = "";
  password : string = "";
  mail : string = "";
  name : string = "";
  surname : string = "";

  logged : boolean = false;
  successful_login : boolean = false;

  login() {

    if (this.username == "" || this.password == "") {alert("Riempi i campi username e password");return;}

    this.login_interface.tryLogin(this.username, this.password, this.mail, this.name, this.surname).subscribe(reply => {

      console.log(reply);
      this.logged = true;
      this.successful_login = reply.valid;
    });
  }

  registra() {

    if (this.username == "" || this.password == "") {alert("Riempi i campi username e password");return;}

    this.login_interface.register(this.username, this.password, this.mail, this.name, this.surname).subscribe(reply => {

      console.log(reply);
      this.login();
    });
  }
}
