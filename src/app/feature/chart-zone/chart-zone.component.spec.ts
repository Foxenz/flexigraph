import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartZoneComponent } from './chart-zone.component';

describe('ChartZoneComponent', () => {
  let component: ChartZoneComponent;
  let fixture: ComponentFixture<ChartZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartZoneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChartZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
