import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockandreportComponent } from './stockandreport.component';

describe('StockandreportComponent', () => {
  let component: StockandreportComponent;
  let fixture: ComponentFixture<StockandreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockandreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockandreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
