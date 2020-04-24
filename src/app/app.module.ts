import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormMainService } from './services/form-main.service';
import { FormMainComponent } from './form-main/form-main.component';
import { FormMainDateComponent } from './form-main-date/form-main-date.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, FormMainComponent, FormMainDateComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FormMainService]
})
export class AppModule { }
