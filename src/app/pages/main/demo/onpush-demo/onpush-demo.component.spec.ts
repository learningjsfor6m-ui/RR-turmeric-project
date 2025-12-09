import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushDemoComponent } from './onpush-demo.component';

describe('OnpushDemoComponent', () => {
  let component: OnpushDemoComponent;
  let fixture: ComponentFixture<OnpushDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnpushDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
