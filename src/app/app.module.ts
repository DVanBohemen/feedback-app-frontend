import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import {CourseRetrievalService} from "./shared/services/course-retrieval.service";
import { ShortFeedbackComponent } from './short-feedback/short-feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";
import { ShortFeedbackGeneralImpressionComponent } from './short-feedback/short-feedback-general-impression/short-feedback-general-impression.component';
import { ShortFeedbackPartsComponent } from './short-feedback/short-feedback-parts/short-feedback-parts.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ShortFeedbackComponent,
    ShortFeedbackGeneralImpressionComponent,
    ShortFeedbackPartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule
  ],
  providers: [CourseRetrievalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
