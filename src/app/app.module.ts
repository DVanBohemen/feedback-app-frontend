import {CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import {CourseService} from "./common/services/course.service";
import { ShortFeedbackComponent } from './short-feedback/short-feedback.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ShortFeedbackGeneralImpressionComponent } from './short-feedback/short-feedback-general-impression/short-feedback-general-impression.component';
import { ShortFeedbackPartsComponent } from './short-feedback/short-feedback-parts/short-feedback-parts.component';
import { SettingsComponent } from './settings/settings.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import { LabelCreatorComponent } from './settings/label-creator/label-creator.component';
import {MatListModule} from "@angular/material/list";
import {MatStepperModule} from "@angular/material/stepper";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {NgSelectModule} from "@ng-select/ng-select";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatTableModule} from "@angular/material/table";
import {DragDropModule} from "@angular/cdk/drag-drop";
import {HttpClientModule} from "@angular/common/http";
import {AppErrorHandler} from "./common/services/app-error-handler";
import {DataService} from "./common/services/data.service";
import { CourseComponent } from './settings/course/course.component';
import { ScoreComponent } from './settings/score/score.component';
import {ScoreService} from './common/services/score.service';
import {NgRatingBarModule} from 'ng-rating-bar';
import {CustomFeedbackService} from './common/services/custom-feedback.service';
import {FeedbackService} from './common/services/feedback.service';
import { ShortFeedbackCustomPartsComponent } from './short-feedback/short-feedback-custom-parts/short-feedback-custom-parts.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ShortFeedbackComponent,
    ShortFeedbackGeneralImpressionComponent,
    ShortFeedbackPartsComponent,
    SettingsComponent,
    LabelCreatorComponent,
    CourseComponent,
    ScoreComponent,
    ShortFeedbackCustomPartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    MatSlideToggleModule,
    MatListModule,
    MatStepperModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    NgSelectModule,
    MatButtonToggleModule,
    MatTableModule,
    DragDropModule,
    HttpClientModule,
    NgRatingBarModule
  ],
  providers: [
    DataService,
    ScoreService,
    CourseService,
    CustomFeedbackService,
    FeedbackService,
    { provide: ErrorHandler, useClass: AppErrorHandler } //Replace Default error handler
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
