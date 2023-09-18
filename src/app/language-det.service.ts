import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LanguageDetObj } from './model';
import { RequestHisService } from './request-his.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageDetService {

  private readonly apiUrl = environment.languageDetection;

  constructor(private httpClient: HttpClient, private requestHisService: RequestHisService) {
  }

  detectLanguages(text: string, option: boolean, token: string): Observable<LanguageDetObj> {
    this.requestHisService.logApiCall("GET", `${this.apiUrl}/?text=${text}&clean=${option}&token=${token}`);
    return this.httpClient.get<LanguageDetObj>(`${this.apiUrl}/?text=${text}&clean=${option}&token=${token}`)
  }
}
