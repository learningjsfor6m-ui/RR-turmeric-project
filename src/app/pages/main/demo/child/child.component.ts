import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';



@Component({
  selector: 'child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {
  @Input() user!: { name: string };
  // @Input() user2 = input.required<User>();
  @Output() counterEvent = new EventEmitter<number>();

  // Signals
  counter = signal(0);
  first = signal('John');
  last = signal('Doe');
  fullName = computed(() => `${this.first()} ${this.last()}`);

  ngOnInit() {
    effect(() => {
      console.log('Counter changed:', this.counter());
    });
  }
  setCounter() {
    this.counter.set(10);
    this.counterEvent.emit(this.counter());
  }
  updateCounter() {
    this.counter.update((n) => n + 1);
    this.counterEvent.emit(this.counter());
  }
}
