import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LanguageDetService } from '../language-det.service';
import { DetectedLang } from '../model';

@Component({
  selector: 'app-language-det',
  templateUrl: './language-det.component.html',
  styleUrls: ['./language-det.component.css']
})
export class LanguageDetComponent implements OnInit {

  resultArray: Array<DetectedLang>;
  cleanOptionEnabled: boolean;
  detectionForm: FormGroup;

  constructor(private languageDetService: LanguageDetService, private formBuilder: FormBuilder) {
    this.detectionForm = this.formBuilder.group({
      text: ['', [Validators.required]]
    })
    this.cleanOptionEnabled = false;
    this.resultArray = new Array<DetectedLang>;
  }

  ngOnInit(): void {
  }

  detectLanguages() {
    this.languageDetService.detectLanguages(
      this.detectionForm.get('text')?.value,
      this.cleanOptionEnabled,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.detectionForm.reset(),
      this.resultArray = result.detectedLangs;
    })
}

}
