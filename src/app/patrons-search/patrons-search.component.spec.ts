import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatronsSearchComponent } from './patrons-search.component';

describe('PatronsSearchComponent', () => {
  let component: PatronsSearchComponent;
  let fixture: ComponentFixture<PatronsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatronsSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatronsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
