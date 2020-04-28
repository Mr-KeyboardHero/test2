import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuestionBase<string>[]) {
    let group: any = {};
    console.log(group)
    console.log(questions)
    questions.forEach(question => {
      group[question.key] = false
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '',Validators.pattern(question.pattern));
    });
    return new FormGroup(group);
  }
}