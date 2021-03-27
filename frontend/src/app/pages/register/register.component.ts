import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../core/services/auth.service';
import { AlertService } from './../../core/services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = true;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      first_name: ['Gustavo', Validators.required],
      last_name: ['Sánchez', Validators.required],
      username: ['gsanchez', Validators.required],
      email: ['asdf@asdf.com', Validators.required],
      password: ['asdfasdf', [Validators.required, Validators.minLength(6)]]
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    const newUser = this.registerForm.value;
    newUser['category'] = 'user';
    this.authService.register(newUser)
      .pipe(first())
      .subscribe({
        next: () => {
            this.alertService.success('Registration successful', { keepAfterRouteChange: true });
            this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error: error => {
            this.alertService.error(error);
            this.loading = false;
        }
      });
  }

}
