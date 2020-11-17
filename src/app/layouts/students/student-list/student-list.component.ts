import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Student } from '../../../models/Student'
import { ServiceService } from '../../../services/service.service'
import { addedStudent } from '../student-add/student-add.component'

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students:Student[] = []
  student!:Student


  constructor(private StudentService:ServiceService) { }

  ngOnInit(): void {
    this.StudentService.GetStudents().subscribe(students => {
      this.students = students
      this.students.sort((a:any,b:any) => {
        return a.lastName - b.lastName
      })
    })

    if(addedStudent) {
      this.students.push(addedStudent)
    }
  }

  deleteStudent(student:Student) {
    this.students = this.students.filter(s => s.id !== student.id)

    this.StudentService.DeleteStudent(student.id).subscribe(res => console.log("DELETED PRODUCT:::", res))
  }

  changeStudent(student:Student) {
    this.students.findIndex( (element, index, array) => {
      if (element.id == student.id) {
        this.students[index] = student
      }
    })
  }


}
