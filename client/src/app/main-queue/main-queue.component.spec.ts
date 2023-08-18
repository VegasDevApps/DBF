import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainQueueComponent } from './main-queue.component';

describe('MainQueueComponent', () => {
  let component: MainQueueComponent;
  let fixture: ComponentFixture<MainQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
