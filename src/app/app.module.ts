import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AllQuestionComponent } from './all-question/all-question.component';
import { MyQuestionComponent } from './my-question/my-question.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
import { AllQuestionsFilterPipe } from './shared/all-questions-filter.pipe';
//import { Component, OnInit, ViewEncapsulation, NgZone, enableProdMode } from '@angular/core'; 

//enableProdMode();

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'all-question', component: AllQuestionComponent },
    { path: 'my-question', component: MyQuestionComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: '**', component: NotFoundComponent }
                           ];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AllQuestionComponent,
    MyQuestionComponent,
    NotFoundComponent,
    FeedbackComponent,
    HomeComponent,
    AllQuestionsFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }