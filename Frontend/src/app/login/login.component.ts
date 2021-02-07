import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

import { AlertService } from "./_services";

@Component({ templateUrl: "login.component.html", styleUrls: ['./login.component.css'] })
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
    });


    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || ' ';
  }

  get f() {
    return this.form.controls;
  }

  async onSubmit() {
    if (sessionStorage.getItem('token') != null) {
      this.router.navigate([this.returnUrl]); 
      
    }
      
    this.alertService.clear();
    let username = this.f.username.value;
    let password = this.f.password.value;
    if (username == "")
      this.alertService.error("Username non può essere vuoto");
    if (password == "")
      this.alertService.error("Password non può essere vuota");

    if (username && password) {
      try {
        var token = await this.http.post<any>(`http://localhost:4000/users/authenticate`, { username, password }).toPromise();
        sessionStorage.setItem('token', token.token);
        this.router.navigate([this.returnUrl]);
      } catch (error) {
        if (error.error.message != null)
          this.alertService.error(error.error.message);
        else
          this.alertService.error(error.message);
      }
    }

  }
}
