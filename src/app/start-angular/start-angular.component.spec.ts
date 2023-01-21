import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartAngularComponent } from './start-angular.component';

describe('StartAngularComponent', () => {
  let component: StartAngularComponent;
  let fixture: ComponentFixture<StartAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
