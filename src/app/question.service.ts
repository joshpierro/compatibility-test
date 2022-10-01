import { Injectable } from '@angular/core';

import { from, Observable, of } from 'rxjs';

import { Question } from './models/question';
import {questionData} from './data/data';


@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() { }

   public getQuestions():Observable<Question[]> {
    return of(questionData);
}

}

