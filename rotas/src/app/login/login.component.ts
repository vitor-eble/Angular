import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';


@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  fazerLogin(){

  }

}
