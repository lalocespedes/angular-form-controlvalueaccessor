import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable()
export class FormMainService {
  public form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ["", Validators.required],
      email: ["@", [Validators.required, Validators.email]],
      phone: [""],
      date: [new Date().toISOString().substring(0,10)]
    });
  }

  get isValid(): boolean {
    if (!this.form.valid) {
      return false;
    }
    return true;
  }
}
