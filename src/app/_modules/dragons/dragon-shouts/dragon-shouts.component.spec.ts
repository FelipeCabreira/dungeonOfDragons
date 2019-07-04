import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonShoutsComponent } from './dragon-shouts.component';

describe('DragonShoutsComponent', () => {
  let component: DragonShoutsComponent;
  let fixture: ComponentFixture<DragonShoutsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragonShoutsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragonShoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
