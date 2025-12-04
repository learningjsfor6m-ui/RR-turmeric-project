import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvardEntryComponent } from './invard-entry.component';

describe('InvardEntryComponent', () => {
  let component: InvardEntryComponent;
  let fixture: ComponentFixture<InvardEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvardEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvardEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
