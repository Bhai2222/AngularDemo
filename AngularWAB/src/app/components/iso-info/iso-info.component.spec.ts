import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IsoInfoComponent } from './iso-info.component';

describe('IsoInfoComponent', () => {
  let component: IsoInfoComponent;
  let fixture: ComponentFixture<IsoInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IsoInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IsoInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
