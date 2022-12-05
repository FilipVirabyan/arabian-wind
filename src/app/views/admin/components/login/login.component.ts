import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AdminService} from '../../../../core/api-services/admin/admin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  constructor(private _adminService: AdminService,
              private _router: Router) {
  }

  ngOnInit(): void {
  }

  submit() {

    if (this.loginForm.invalid) {
      return;
    }

    this._adminService.login(this.loginForm.getRawValue())
      .subscribe(() => {
        this._router.navigate(['dashboard'])
      })

  }

}
