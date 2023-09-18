import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EntityExtService } from '../entity-ext.service';
import { Entity } from '../model';

@Component({
  selector: 'app-entity-ext',
  templateUrl: './entity-ext.component.html',
  styleUrls: ['./entity-ext.component.css']
})
export class EntityExtComponent implements OnInit {
  
  min_confidence: number;

  includeString: string;
  includeAbstract: boolean;
  includeCategories: boolean;
  includeImage: boolean;

  resultArray: Array<Entity>;
  extractionForm: FormGroup;

  constructor(private entityExtService: EntityExtService, private formBuilder: FormBuilder) {
    this.extractionForm = this.formBuilder.group({
      text: ['', [Validators.required]]
    })
    this.min_confidence = 0.6;
    this.includeString = '';
    this.includeAbstract = false;
    this.includeCategories = false;
    this.includeImage = false;
    this.resultArray = new Array<Entity>;
  }

  ngOnInit(): void {
  }

  extractEntities() {
    this.includeString = '';
    if(this.includeAbstract)
      this.includeString += "abstract,";
    if(this.includeCategories)
      this.includeString += "categories,";
    if(this.includeImage)
      this.includeString += "image";

    this.entityExtService.extractEntities(
      this.extractionForm.get('text')?.value,
      this.min_confidence,
      this.includeString,
      String(localStorage.getItem("token"))
    ).subscribe(result => {
      this.extractionForm.reset(),
      this.resultArray = result.annotations;
    })
    console.log(this.resultArray);
  }

}
