import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettingsComponent} from "./settings/settings.component";
import {ShortFeedbackComponent} from "./short-feedback/short-feedback.component";
import {FormSentComponent} from "./form-sent/form-sent.component";

const routes: Routes = [{path: 'settings', component: SettingsComponent},
  {path: 'short-feedback', component: ShortFeedbackComponent},
  {path: 'form-sent', component: FormSentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
