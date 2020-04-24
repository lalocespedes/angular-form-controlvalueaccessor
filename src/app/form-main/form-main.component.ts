import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormMainService } from '../services/form-main.service';

@Component({
  selector: 'app-form-main',
  templateUrl: './form-main.component.html',
  styleUrls: ['./form-main.component.css']
})
export class FormMainComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formMainService: FormMainService
  ) { }

  ngOnInit() {
    this.form = this.formMainService.form;
  }
}