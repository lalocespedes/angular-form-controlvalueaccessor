import { Component, forwardRef, OnInit } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "app-form-main-date",
  templateUrl: "./form-main-date.component.html",
  styleUrls: ["./form-main-date.component.css"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: FormMainDateComponent
    }
  ]
})
export class FormMainDateComponent implements ControlValueAccessor {
  date: string;

  // Function to call when the value changes.
  _onChange: (value: any) => void;

  // Function to call when the input is touched (when a value is clicked).
  onTouched = () => {};

  writeValue(value: any) {
    this.date = value;
  }

  registerOnChange(fn: (value: any) => void) {
    this._onChange = fn;
  }

  registerOnTouched() {}

  selectChangeHandler(event) {
    this._onChange(event.target.value);
  }
}
