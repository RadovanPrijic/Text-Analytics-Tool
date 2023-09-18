import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EntityExtComponent } from './entity-ext/entity-ext.component';
import { LanguageDetComponent } from './language-det/language-det.component';
import { RequestHisComponent } from './request-his/request-his.component';
import { SentimentAnComponent } from './sentiment-an/sentiment-an.component';
import { TextSimComponent } from './text-sim/text-sim.component';
import { TokenConfigComponent } from './token-config/token-config.component';

const routes: Routes = [
  {
    path: "entity_extraction",
    component: EntityExtComponent
  },
  {
    path: "text_similarity",
    component: TextSimComponent
  },
  {
    path: "language_detection",
    component: LanguageDetComponent
  },
  {
    path: "sentiment_analysis",
    component: SentimentAnComponent
  },
  {
    path: "token_configuration",
    component: TokenConfigComponent
  },
  {
    path: "request_history",
    component: RequestHisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
