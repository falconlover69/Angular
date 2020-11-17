import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Student } from '../../../models/Student'

@Component({
  selector: 'app-student-filter',
  templateUrl: './student-filter.component.html',
  styleUrls: ['./student-filter.component.css']
})
export class StudentFilterComponent implements OnInit {

  @Input() students:Student[] = []

  constructor() { }

  ngOnInit(): void {
  }

  GroupFilter(group:String) {

  }

  DirectionOfTrainingFilter(directionOfTraining:String) {

  }

}
