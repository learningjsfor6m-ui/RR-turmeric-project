import { Component,computed,input } from '@angular/core';
import { FieldState } from '@angular/forms/signals';

@Component({
  selector: 'form-errors',
  imports: [],
  template: `
  @if(showShowErr()){
    @for(error of controls().errors();track error.kind){
      <p style="color: red;">{{error.message}}</p>
    }
  }
  `,
  styleUrl: './form-errors.component.scss',
})
export class FormErrorsComponent {
  readonly controls = input.required<FieldState<unknown>>()

  protected readonly showShowErr = computed(()=>{
    const field = this.controls();
    return !field.valid() && field.touched()
  })
}
