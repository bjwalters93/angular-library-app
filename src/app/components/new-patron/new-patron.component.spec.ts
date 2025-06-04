import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPatronComponent } from './new-patron.component';

describe('NewPatronComponent', () => {
  let component: NewPatronComponent;
  let fixture: ComponentFixture<NewPatronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewPatronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPatronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
