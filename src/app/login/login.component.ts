import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;


  constructor(
    private _route: Router,
    private _formBuilder: FormBuilder,
    private _cookies: CookieService,
  ) { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._route.navigate(['/dungeon']);
    }
  }
}
