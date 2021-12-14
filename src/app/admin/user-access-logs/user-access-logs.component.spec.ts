import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccessLogsComponent } from './user-access-logs.component';

describe('UserAccessLogsComponent', () => {
  let component: UserAccessLogsComponent;
  let fixture: ComponentFixture<UserAccessLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAccessLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccessLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
