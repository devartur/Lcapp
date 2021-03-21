import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs";
import { AllQuestionsMenu } from "src/app/model/AllQuestionsMenu";
import { Question } from "src/app/model/Question";
import { FeedbackViewModel } from "../feedback/feedback.component";
import { map } from 'rxjs/operators';
import { QuestionsList } from '../model/QuestionsList';
import { QuestionWithAddInfo } from '../model/QuestionWithAddInfo';
import { QuestionsListStatistics } from '../model/QuestionsListStatistics';
import { QuestionDataToStatistics } from '../model/QuestionDataToStatistics';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL = "http://localhost:8080/api";
  private ALL_QUESTIONS_MENU_URL = `${this.BASE_URL}/all-questions-menu`;
  private ALL_QUESTIONS_URL = `${this.BASE_URL}/all-questions`;
  private SELECTED_QUESTIONS_URL = `${this.BASE_URL}/selected-questions/`;
  private SEND_FEEDBACK_URL = `${this.BASE_URL}/feedback`;
  private SEND_ADD_USER_QUESTIONS_LIST_URL = `${this.BASE_URL}/questions-lists`;
  private QUESTIONS_LISTS_URL = `${this.BASE_URL}/questions-lists`;
  private SEND_ADD_QUESTIONS_TO_QUESTIONS_LIST_URL = `${this.BASE_URL}/questions-to-questions-lists`;
  private GET_USER_QUESTIONS_WITH_ADD_INFO_URL = `${this.BASE_URL}/user-questions-in-questions-lists`;
  private UPDATE_QUESTION_WITH_ADD_INFO_URL = `${this.BASE_URL}/user-questions/`;
  private GET_QUESTIONS_LIST_STATISTICS_URL = `${this.BASE_URL}/questions-list-statistics`;
  private GET_QUESTION_DATA_TO_STATISTICS_URL = `${this.BASE_URL}/question-data-to-statistics`;

  
  constructor(private http: HttpClient) { }


  getSelectedQuestion(firstLevel: string, level: string): Observable<Question[]> {
    let params = new HttpParams()
      .set('firstLevelValue', firstLevel)
      .set('level', level);
    return this.http.get<Question[]>(this.SELECTED_QUESTIONS_URL, { params });
  }

  getAllQuestionsMenu(): Observable<AllQuestionsMenu[]> {
    return this.http.get<AllQuestionsMenu[]>(this.ALL_QUESTIONS_MENU_URL);

  }

  getAllQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(this.ALL_QUESTIONS_URL);

  }

  getUserQuestionsLists(): Observable<QuestionsList[]> {
    return this.http.get<QuestionsList[]>(this.QUESTIONS_LISTS_URL);

  }

  postFeedback(feedback: FeedbackViewModel): Observable<any> {
    return this.http.post(this.SEND_FEEDBACK_URL, feedback);
  }

  addUserQuestionsList(userQuestionsList: QuestionsList): Observable<any> {
    return this.http.post(this.SEND_ADD_USER_QUESTIONS_LIST_URL, userQuestionsList);
  }

  postAddQuestionsToQuestionsList(questionsList: QuestionsList): Observable<any> {
    return this.http.put(this.SEND_ADD_QUESTIONS_TO_QUESTIONS_LIST_URL, questionsList);
  }

  getQuestionsWithAddInfo(questionsListId: string): Observable<QuestionWithAddInfo[]> {
    let params = new HttpParams()
      .set('questionsListId', questionsListId);
    return this.http.get<QuestionWithAddInfo[]>(this.GET_USER_QUESTIONS_WITH_ADD_INFO_URL, { params });
  }

  
  updateQuestionWithAddInfo(updateQuestion: Map<string, any>, questionId: string): Observable<any> {
    return this.http.patch(this.UPDATE_QUESTION_WITH_ADD_INFO_URL + questionId, Object.fromEntries(updateQuestion));
  }
  
  repeatIn(updateQuestion: Map<string, any>, questionId: string): Observable<any> {
    return this.http.patch(this.UPDATE_QUESTION_WITH_ADD_INFO_URL + questionId, Object.fromEntries(updateQuestion));
  }

  getQuestionsListStatistics(questionsListId: string): Observable<QuestionsListStatistics> {
    let params = new HttpParams()
      .set('questionsListId', questionsListId);
    return this.http.get<QuestionsListStatistics>(this.GET_QUESTIONS_LIST_STATISTICS_URL, { params });
  }

  getQuestionDataToStatistics(questionsListId: string): Observable<QuestionDataToStatistics[]> {
    let params = new HttpParams()
      .set('questionsListId', questionsListId);
    return this.http.get<QuestionDataToStatistics[]>(this.GET_QUESTION_DATA_TO_STATISTICS_URL, { params });
  }



}
