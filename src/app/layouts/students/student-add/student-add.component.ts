import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../services/service.service'

let addedStudent:any

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
class StudentAddComponent implements OnInit {

  

  constructor(private StudentService:ServiceService) { }

  ngOnInit(): void {
  }


  AddStudent(lastName:String, name:String, patronymic:String, phone:String, email:String, dateOfBirth:String, group:String, directionOfTraining:String) {
    let student = {
      lastName: lastName, 
      name: name, 
      patronymic: patronymic, 
      phone: phone, 
      email: email, 
      dateOfBirth: dateOfBirth, 
      group: group, 
      directionOfTraining: directionOfTraining
    }

    this.StudentService.AddStudent(student).subscribe(res => {
      addedStudent = res
    })
  }
}

export {StudentAddComponent, addedStudent}
