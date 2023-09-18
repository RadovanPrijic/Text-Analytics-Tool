import { Component, OnInit } from '@angular/core';
import { ApiCallLog } from '../model';
import { RequestHisService } from '../request-his.service';

@Component({
  selector: 'app-request-his',
  templateUrl: './request-his.component.html',
  styleUrls: ['./request-his.component.css']
})
export class RequestHisComponent implements OnInit {
  
  apiCalls: Array<ApiCallLog>;

  constructor(private requestHisService: RequestHisService) {
    this.apiCalls = new Array<ApiCallLog>;
  }

  ngOnInit(): void {
    this.apiCalls = this.requestHisService.apiCalls;
  }
}
