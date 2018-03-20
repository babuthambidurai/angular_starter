import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor() {}

  genderList: string[] = ["Male", "Female", "Others"];
  signupForm: FormGroup;

  get email() {
    return this.signupForm.get("email");
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      pwd: new FormControl("", [Validators.required, Validators.minLength(8)]),
      confirmPwd: new FormControl("", [
        Validators.required,
        Validators.minLength(8)
      ]),
      gender: new FormControl("", Validators.required),
      terms: new FormControl(false, Validators.requiredTrue)
    });
  }

  submitForm() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      console.log(this.signupForm);
    }
  }
}
