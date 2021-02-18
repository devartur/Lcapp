import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuestionsListComponent } from './user-questions-list.component';

describe('UserQuestionsListComponent', () => {
  let component: UserQuestionsListComponent;
  let fixture: ComponentFixture<UserQuestionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuestionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
