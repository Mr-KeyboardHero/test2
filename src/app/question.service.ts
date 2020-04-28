import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';
import { TextboxQuestion } from './question-textbox';
import { of } from 'rxjs';
import { Validators } from '@angular/forms';

@Injectable()
export class QuestionService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    let questions: QuestionBase<string>[] = [

      new TextboxQuestion({
        key: 'userName',
        label: '用户名',
        value: '',
        required: true,
        patText:'用户名不存在',
        order: 1,
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: '邮箱',
        value: '',
        type: 'email',
        required: false,
        pattern:'[a-z0-9._%+_]+@[a-z0-9.-]+',
        patText:'邮箱格式错误',
        order: 2
      }),

      new TextboxQuestion({
        key: 'passWord',
        label: '密码',
        value: '',
        type: 'password',
        required: false,
        pattern:'^[a-zA-Z0-9]+$',
        patText:'密码必须由字母数字大小写构成',
        order: 3
      }),

      new TextboxQuestion({
        key: 'passWordAgain',
        label: '确认密码',
        value: '',
        type: 'password',
        required: false,
        order: 4
      })
    ];

    return of(questions.sort((a, b) => a.order - b.order));
  }
}