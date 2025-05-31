import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronsComponent } from './patrons.component';

describe('PatronsComponent', () => {
  let component: PatronsComponent;
  let fixture: ComponentFixture<PatronsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatronsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatronsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
