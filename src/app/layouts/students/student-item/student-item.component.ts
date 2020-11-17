import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Student } from '../../../models/Student'
import { ServiceService } from '../../../services/service.service'
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms'


@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {

  @Input() student!:Student
  @Output() deleteStudent:EventEmitter<Student> = new EventEmitter() 
  // changeStudent = new EventEmitter<Student>()
  @Output() changeStudent:EventEmitter<Student> = new EventEmitter()
  //  changeStudent = new EventEmitter<Student>()

  StudentForm!:FormGroup
  disabledForms:Boolean = false
  modalRef!:BsModalRef

  constructor(private StudentService:ServiceService, private modalService:BsModalService) { }

  ngOnInit(): void {
    this.StudentForm = new FormGroup({
      lastName: new FormControl({ value: this.student.lastName, disabled: this.disabledForms }, [Validators.required]),
      name: new FormControl({ value: this.student.name, disabled: this.disabledForms }, [Validators.required]),
      patronymic: new FormControl({ value: this.student.patronymic, disabled: this.disabledForms }, [Validators.required]),
      phone: new FormControl({ value: this.student.phone, disabled: this.disabledForms }, [Validators.required]),
      email: new FormControl({ value: this.student.email, disabled: this.disabledForms }, [Validators.required]),
      dateOfBirth : new FormControl({ value: this.student.dateOfBirth, disabled: this.disabledForms }, [Validators.required]),
      group: new FormControl({ value: this.student.group, disabled: this.disabledForms }, [Validators.required]),
      directionOfTraining: new FormControl({ value: this.student.directionOfTraining, disabled: this.disabledForms }, [Validators.required]) 
    })
  }


  DeleteStudent(student:Student) {
    //@ts-ignore
    this.deleteStudent.emit(student)
  }

  EditStudent(id:Number, lastName:String, name:String, patronymic:String, phone:String, email:String, dateOfBirth:String, group:String, directionOfTraining:String) {

    this.modalRef.hide()

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

    this.StudentService.ChangeData(student, id).subscribe(res => {
      console.log("STUDENT FROM CHANGE DATA:::", res)
      //@ts-ignore
      this.changeStudent.emit(res)
    })
  }

  OpenModal(template:any) {
    this.modalRef = this.modalService.show(template)
  }

}
