import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../../services/common.service';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
import { formConfig } from '../config';
import { IForm } from '../../../shared/interfaces/dynamic-form/form.interface';

@Component({
  selector: 'filter-header',
  imports: [FormsModule, DynamicFormComponent],
  templateUrl: './filter-header.component.html',
  styleUrl: './filter-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterHeaderComponent implements OnInit {
  @Input() compName: string = '';
  @Input() filterName: string = '';
  value = '';
  @Output() changeEvent = new EventEmitter<string>();
  @Output() changeInput = new EventEmitter<string>();
  @Output() changeLayoutFlag = new EventEmitter<string>();
  @Input() formData = [];
  isFlag: string = '';
  setMessage: string = '';
  addNewGodown = formConfig as IForm;

  constructor(public common: CommonService) {}

  ngOnInit() {
    console.log(this.filterName);
    this.common.layouFlag$.subscribe((flag) => {
      this.isFlag = flag;
    });
  }

  sendMessage(name: string, type: string) {
    this.setMessage = type;
    this.changeEvent.emit(name);
  }

  updateValue(newValue: string) {
    debugger;
    this.value = newValue;
    this.changeInput.emit(newValue);
  }

  changeLayout() {
    let value = this.isFlag ? 'card' : 'table';
    this.common.layouFlag$.next(value);
    this.changeLayoutFlag.emit(value);
  }
}
