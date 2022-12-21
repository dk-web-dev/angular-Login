import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTutorialComponent } from './main-tutorial.component';

describe('ReadComponent', () => {
  let component: MainTutorialComponent;
  let fixture: ComponentFixture<MainTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTutorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
