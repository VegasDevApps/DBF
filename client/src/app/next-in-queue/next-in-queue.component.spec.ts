import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextInQueueComponent } from './next-in-queue.component';

describe('NextInQueueComponent', () => {
  let component: NextInQueueComponent;
  let fixture: ComponentFixture<NextInQueueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextInQueueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextInQueueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
