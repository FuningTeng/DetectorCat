import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialRoomComponent } from './trial-room.component';

describe('TrialRoomComponent', () => {
  let component: TrialRoomComponent;
  let fixture: ComponentFixture<TrialRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
