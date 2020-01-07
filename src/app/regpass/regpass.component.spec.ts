import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegpassComponent } from './regpass.component';

describe('RegpassComponent', () => {
  let component: RegpassComponent;
  let fixture: ComponentFixture<RegpassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegpassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegpassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
