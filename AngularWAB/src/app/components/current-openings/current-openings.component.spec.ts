import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentOpeningsComponent } from './current-openings.component';

describe('CurrentOpeningsComponent', () => {
  let component: CurrentOpeningsComponent;
  let fixture: ComponentFixture<CurrentOpeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentOpeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
