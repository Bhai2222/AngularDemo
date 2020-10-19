import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurNewProdutsComponent } from './our-new-produts.component';

describe('OurNewProdutsComponent', () => {
  let component: OurNewProdutsComponent;
  let fixture: ComponentFixture<OurNewProdutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurNewProdutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurNewProdutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
