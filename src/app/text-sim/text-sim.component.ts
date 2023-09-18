import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TextSimService } from '../text-sim.service';

@Component({
  selector: 'app-text-sim',
  templateUrl: './text-sim.component.html',
  styleUrls: ['./text-sim.component.css']
})
export class TextSimComponent implements OnInit {

  similarityNumber: number;
  textForm: FormGroup;

  constructor(private textSimService: TextSimService, private formBuilder: FormBuilder) {
    this.textForm = this.formBuilder.group({
      text1: ['', [Validators.required]],
      text2: ['', [Validators.required]],
    })
    this.similarityNumber = 0;
  }

  ngOnInit(): void {
  }

  getSimilarity() {
    this.similarityNumber = 0;
    this.textSimService.compareTexts(
      this.textForm.get('text1')?.value,
      this.textForm.get('text2')?.value,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.textForm.reset(),
      this.similarityNumber = result.similarity*100;
    })
  }

}
