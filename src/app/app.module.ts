import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TokenConfigComponent } from './token-config/token-config.component';
import { EntityExtComponent } from './entity-ext/entity-ext.component';
import { TextSimComponent } from './text-sim/text-sim.component';
import { SentimentAnComponent } from './sentiment-an/sentiment-an.component';
import { LanguageDetComponent } from './language-det/language-det.component';
import { RequestHisComponent } from './request-his/request-his.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenConfigComponent,
    EntityExtComponent,
    TextSimComponent,
    SentimentAnComponent,
    LanguageDetComponent,
    RequestHisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
