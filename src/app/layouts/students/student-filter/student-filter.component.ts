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

  GroupFilter(group:any) {
    this.students = this.students.filter(s => !s.group.search(group))
    // if (this.students.length == 0 && group == '') this.students = this.studentsForSort
    console.log('GROUP:::', group)
    console.log('HI GROUP:::',this.students)
  }

  DirectionOfTrainingFilter(directionOfTraining:any) {
    this.students = this.students.filter(s => s.directionOfTraining.includes(directionOfTraining))
    console.log('HI directionOfTraining:::', this.students)
  }

}
