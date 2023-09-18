import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Sentiment } from '../model';
import { SentimentAnService } from '../sentiment-an.service';

@Component({
  selector: 'app-sentiment-an',
  templateUrl: './sentiment-an.component.html',
  styleUrls: ['./sentiment-an.component.css']
})
export class SentimentAnComponent implements OnInit {

  lang: string;
  typeColor: string = 'black';
  resultSentiment: Sentiment;
  sentimentForm: FormGroup;

  constructor(private sentimentAnService: SentimentAnService, private formBuilder: FormBuilder) {
    this.sentimentForm = this.formBuilder.group({
      text: ['', [Validators.required]]
    })
    this.lang = 'auto';
    this.resultSentiment = new Sentiment;
  }

  ngOnInit(): void {
  }

  hsl_col_perc(score: number): void{
    var hue = ((score + 1)/2)*120;
    this.typeColor = 'hsl('+hue+', 100%, 50%)';
  }

  analyseSentiment() {
    this.sentimentAnService.analyseSentiment(
      this.sentimentForm.get('text')?.value,
      this.lang,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.sentimentForm.reset(),
      this.resultSentiment = result.sentiment;
      this.hsl_col_perc(this.resultSentiment.score);
    })
  }

}
