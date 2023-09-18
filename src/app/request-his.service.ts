import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { ApiCallLog } from './model';

@Injectable({
  providedIn: 'root'
})
export class RequestHisService {

  apiCalls: Array<ApiCallLog>

  constructor() {
    this.apiCalls = new Array<ApiCallLog>;
  }

  public logApiCall(requestType: string, requestUrl: string): void {
    this.apiCalls.push(new ApiCallLog(
        formatDate(new Date(), 'dd.MM.yyyy', 'en'),
        formatDate(new Date(), 'hh:mm:ss', 'en'),
        requestType, requestUrl
    ))
    console.log(this.apiCalls);
    
  }
}
