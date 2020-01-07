import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoggiesComponent } from './boggies.component';

describe('BoggiesComponent', () => {
  let component: BoggiesComponent;
  let fixture: ComponentFixture<BoggiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoggiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoggiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
