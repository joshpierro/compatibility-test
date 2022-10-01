import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../models/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input()  question!: Question;
  answer: any;
  choices : number[] = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {}

}
