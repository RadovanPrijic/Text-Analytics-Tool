import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TextSimObj } from './model';
import { RequestHisService } from './request-his.service';

@Injectable({
  providedIn: 'root'
})
export class TextSimService {

  private readonly apiUrl = environment.textSimilarity;

  constructor(private httpClient: HttpClient, private requestHisService: RequestHisService) {
  }

  compareTexts(text1: string, text2: string, token: string): Observable<TextSimObj> {
    this.requestHisService.logApiCall("GET", `${this.apiUrl}/?text1=${text1}&text2=${text2}&token=${token}`);
    return this.httpClient.get<TextSimObj>(`${this.apiUrl}/?text1=${text1}&text2=${text2}&token=${token}`)
  }
}
