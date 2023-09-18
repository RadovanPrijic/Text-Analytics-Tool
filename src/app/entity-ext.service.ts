import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EntityExtObj } from './model';
import { RequestHisService } from './request-his.service';

@Injectable({
  providedIn: 'root'
})
export class EntityExtService {

  private readonly apiUrl = environment.entityExtraction;

  constructor(private httpClient: HttpClient, private requestHisService: RequestHisService) {
  }

  extractEntities(text: string, min_confidence: number, include: string, token: string): Observable<EntityExtObj> {
    this.requestHisService.logApiCall("GET", `${this.apiUrl}/?text=${text}&min_confidence=${min_confidence}&include=${include}&token=${token}`);
    return this.httpClient.get<EntityExtObj>(`${this.apiUrl}/?text=${text}&min_confidence=${min_confidence}&include=${include}&token=${token}`)
  }
}
