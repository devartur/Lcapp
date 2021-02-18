import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserQuestionsListComponent } from './add-user-questions-list.component';

describe('AddUserQuestionsListComponent', () => {
  let component: AddUserQuestionsListComponent;
  let fixture: ComponentFixture<AddUserQuestionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserQuestionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserQuestionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
