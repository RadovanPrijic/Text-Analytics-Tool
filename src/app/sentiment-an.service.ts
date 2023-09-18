import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SentimentAnObj } from './model';
import { RequestHisService } from './request-his.service';

@Injectable({
  providedIn: 'root'
})
export class SentimentAnService {

  private readonly apiUrl = environment.sentimentAnalysis;

  constructor(private httpClient: HttpClient, private requestHisService: RequestHisService) {
  }

  analyseSentiment(text: string, lang: string, token: string): Observable<SentimentAnObj> {
    this.requestHisService.logApiCall("GET", `${this.apiUrl}/?text=${text}&lang=${lang}&token=${token}`);
    return this.httpClient.get<SentimentAnObj>(`${this.apiUrl}/?text=${text}&lang=${lang}&token=${token}`)
  }
}
