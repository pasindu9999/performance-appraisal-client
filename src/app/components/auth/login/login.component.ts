import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = new loginModel();

  constructor(private service:AuthService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null)
    {
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(form: NgForm)
  {
    this.service.login(form.value).subscribe({
      next: (res) => {
        localStorage.setItem('token', res);
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
      },
    });
  }

}
