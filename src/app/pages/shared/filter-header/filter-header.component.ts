import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'filter-header',
  imports: [FormsModule],
  templateUrl: './filter-header.component.html',
  styleUrl: './filter-header.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FilterHeaderComponent implements OnInit {
  @Input() compName: string = '';
  @Input() filterName: string = '';
  value = '';
  @Output() changeEvent = new EventEmitter<string>();
  @Output() changeInput = new EventEmitter<string>();
  setMessage: string='';

  constructor() {}

  ngOnInit() {
    console.log(this.filterName);
  }

  sendMessage(name: string,type:string) {
    this.setMessage = type
    this.changeEvent.emit(name);
  }

  updateValue(newValue: string) {
    debugger
    this.value = newValue;
    this.changeInput.emit(newValue);
  }
}
