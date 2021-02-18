import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuestionsListStatisticsComponent } from './user-questions-list-statistics.component';

describe('UserQuestionsListStatisticsComponent', () => {
  let component: UserQuestionsListStatisticsComponent;
  let fixture: ComponentFixture<UserQuestionsListStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuestionsListStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuestionsListStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
