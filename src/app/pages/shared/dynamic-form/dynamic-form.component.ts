import { Component, inject, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IForm,
  IFormControl,
  IValidator,
} from '../../../shared/interfaces/dynamic-form/form.interface';
import { CommonModule } from '@angular/common';
import { GodownServiceService } from '../../../core/godown-service.service';
declare var bootstrap: any;
@Component({
  selector: 'dynamic-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @Input() form!: IForm;
  fb = inject(FormBuilder);
  dynamicForGrp: FormGroup = this.fb.group({});
  isSubmitted: boolean = false;

  constructor(private service: GodownServiceService) {}

  ngOnInit(): void {
    if (this.form.formControls) {
      let formGroup: any = {};
      this.form.formControls.forEach((controls: IFormControl) => {
        let controlValidators: any = [];
        if (controls.validators) {
          controls.validators.forEach((val: IValidator) => {
            if (val.validationName === 'required')
              controlValidators.push(Validators.required);
            if (val.validationName === 'email')
              controlValidators.push(Validators.email);
            if (val.validationName === 'minlength')
              controlValidators.push(
                Validators.minLength(val.minLength as number)
              );
            if (val.validationName === 'maxlength')
              controlValidators.push(
                Validators.maxLength(val.maxLength as number)
              );
            if (val.validationName === 'pattern')
              controlValidators.push(Validators.pattern(val.pattern as string));
          });
        }
        formGroup[controls.name] = [controls.value || '', controlValidators];
      });

      this.dynamicForGrp = this.fb.group(formGroup);
    }
  }

  onSubmit() {
    this.isSubmitted = true;

    if (this.dynamicForGrp.invalid) {
      this.dynamicForGrp.markAllAsTouched();
      return;
    }

    console.log(this.dynamicForGrp.value);
    if (this.dynamicForGrp.valid) {
      this.service.godowndetails$.push(this.dynamicForGrp.value);
      (document.activeElement as HTMLElement)?.blur();

      const modalEl = document.getElementById('dynamicModal');
      const modalInstance =
        bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
      modalInstance.hide();

      // ✅ Show toast
      const toastEl = document.getElementById('successToast');
      const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
      toast.show();

      this.resetDynamicForm();
    }
  }
  resetDynamicForm() {
    this.isSubmitted = false;
    this.dynamicForGrp.reset();
    this.dynamicForGrp.markAsPristine();
    this.dynamicForGrp.markAsUntouched();
  }

  getValidationErrors(control: IFormControl): string {
    const myFormControl = this.dynamicForGrp.get(control.name);
    let errMsg = '';
    control.validators.forEach((val) => {
      if (myFormControl?.hasError(val.validationName as string)) {
        errMsg = val.message as string;
      }
    });
    return errMsg;
  }
}
