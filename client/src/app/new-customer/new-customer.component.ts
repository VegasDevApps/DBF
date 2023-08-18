import { Component, EventEmitter, Output } from '@angular/core';
import { MainService } from '../api/services';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent {

  constructor(private mainService: MainService, private fb: FormBuilder) { }

  @Output() newCustomerEvent = new EventEmitter();

  form = this.fb.nonNullable.group({
    fullname: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(100)])]
  });

  register() {
    if (this.form.dirty && this.form.valid) {
      console.log('Vegas: ', this.form.value);
      const { fullname } = this.form.value;
      const data = { fullname: fullname! };
      this.mainService.apiMainNewCustomerPost(data).subscribe(res => {
        if(!res.error)
          this.newCustomerEvent.emit();
          this.form.reset();
      });
    }
  }
}
