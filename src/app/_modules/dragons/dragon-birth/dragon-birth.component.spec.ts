import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonBirthComponent } from './dragon-birth.component';

describe('DragonBirthComponent', () => {
  let component: DragonBirthComponent;
  let fixture: ComponentFixture<DragonBirthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonBirthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonBirthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
