import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../authentication';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  success = true;

  loginForm: FormGroup;
  returnUrl: string;

  spinLoader = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private _auth: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() {
    return this.loginForm.value;
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]], //      dogan.gungor@outlook.com
      password: ['', [Validators.required]], //   Pa$$w0rd
    });
  }

  async submit() {
    this.spinLoader = true;
    this.success = true;
    const { email, password } = this.f;
    const user: User = await this._auth
      .logIn(email, password)
      .toPromise()
      .catch((err) => {
        this.spinLoader = false;
        //alert("Giriş Başarısız");
        this.success = false;
        return err;
      });

    if (user != null) {
      this.router.navigate(['/admin']);
    } else {
      this.spinLoader = false;
    }
  }
}
