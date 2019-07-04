import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonSpecsComponent } from './dragon-specs.component';

describe('DragonSpecsComponent', () => {
  let component: DragonSpecsComponent;
  let fixture: ComponentFixture<DragonSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
