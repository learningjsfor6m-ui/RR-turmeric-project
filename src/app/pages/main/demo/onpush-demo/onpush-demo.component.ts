import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";
import { FormsModule } from '@angular/forms';
import { delay, map, of, timer } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'onpush-demo',
  imports: [ChildComponent,FormsModule,AsyncPipe],
  templateUrl: './onpush-demo.component.html',
  styleUrl: './onpush-demo.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class OnpushDemoComponent {
  user: any = { name: 'amir' };
  // data$ = of('Hello from Observable');
  data$ = timer(1000).pipe(
  map(() => 'Timer finished!')
);

count:number=0;
  //of('Loaded after 2 seconds').pipe(delay(2000));

  changeName() {
    debugger
    this.user.name = 'suhail';
    }


  mutateUser(){
    this.user.name = 'AmirM';

  }

  replaceUser(){
    this.user = { ...this.user, name: this.user.name };
  }
  getTheCount(data:any){
   this.count=data
  }
}
