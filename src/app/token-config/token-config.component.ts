import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-token-config',
  templateUrl: './token-config.component.html',
  styleUrls: ['./token-config.component.css']
})
export class TokenConfigComponent implements OnInit {

  token: string;

  constructor() {
    this.token = '';
   }

  ngOnInit(): void {
  }

  setToken(): void {
    localStorage.setItem("token", this.token);
    (<HTMLInputElement>document.getElementById('token')).value = '';
  }

}
