import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  userform: FormGroup;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.userform = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {}

  login() {
    console.log(this.userform);
    if (this.userform.valid) {
      this.toastr.success('Login Success', 'title');
      this.router.navigate(['home']);
    } else {
      this.toastr.error('Fill mandatory details', 'title');
    }
  }
}
