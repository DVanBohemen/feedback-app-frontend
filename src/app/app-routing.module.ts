import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SettingsComponent} from "./settings/settings.component";
import {ShortFeedbackComponent} from "./short-feedback/short-feedback.component";

const routes: Routes = [{path: 'settings', component: SettingsComponent},
  {path: 'short-feedback', component: ShortFeedbackComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
