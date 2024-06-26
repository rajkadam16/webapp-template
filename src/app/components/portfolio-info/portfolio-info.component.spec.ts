import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioInfoComponent } from './portfolio-info.component';

describe('PortfolioInfoComponent', () => {
  let component: PortfolioInfoComponent;
  let fixture: ComponentFixture<PortfolioInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioInfoComponent]
    });
    fixture = TestBed.createComponent(PortfolioInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
