import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  questions: Question[] = [];

  constructor(private questionService: QuestionService) { }

  ngOnInit(): void {
    this.getQuestions();
  }

  public getQuestions(){
   this.questionService.getQuestions()
   .subscribe(n=>this.questions=n)
  }

}
