import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotormanComponent } from './motorman.component';

describe('MotormanComponent', () => {
  let component: MotormanComponent;
  let fixture: ComponentFixture<MotormanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotormanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotormanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
