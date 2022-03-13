import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }

  readonly BaseURL = 'https://localhost:5001/api';

  formModel = this.fb.group({
    Email: ['',  [Validators.required, Validators.email]],
    FullName: ['',  Validators.required],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

  comparePasswords(fb: FormGroup) {
    let confirmPasswordctrl = fb.get('ConfirmPassword');
    if (confirmPasswordctrl?.errors == null || 'passwordMismatch' in confirmPasswordctrl.errors) {
      if (fb.get('Password')?.value != confirmPasswordctrl?.value) {
        confirmPasswordctrl?.setErrors({ passwordMismatch: true });
      }
      else {
        confirmPasswordctrl?.setErrors(null);
      }
    }

  }

  register() {
    var body = {
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password
    };
    return this.http.post(`${this.BaseURL}/Account/Register`, body, {responseType: 'text'});
  }

  login(formData: any) {
    return this.http.post(`${this.BaseURL}/Account/Login`, formData, {responseType: 'text'});
  }

  getUserProfile() {
    return this.http.get(`${this.BaseURL}/UserProfile`);
  }


}