import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Student } from '../models/Student'

const httpOptions = {
  headers: new HttpHeaders({
    'content-type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  StudentsURL:String = 'http://localhost:3000/students'

  constructor(private http:HttpClient) { }


  GetStudents():Observable<Student[]> {
    return this.http.get<Student[]>(`${this.StudentsURL}`, httpOptions)
  }

  AddStudent(student:any):Observable<Student> {
    return this.http.post<any>(`${this.StudentsURL}`, student, httpOptions)
  }

  DeleteStudent(id:Number):Observable<any> {
    return this.http.delete<any>(`${this.StudentsURL}/${id}`, httpOptions)
  }

  ChangeData(student:any, id:Number):Observable<Student> {
    return this.http.patch<any>(`${this.StudentsURL}/${id}`,
      {
        lastName: student.lastName, 
        name: student.name, 
        patronymic: student.patronymic, 
        phone: student.phone, 
        email: student.email, 
        dateOfBirth: student.dateOfBirth, 
        group: student.group, 
        directionOfTraining: student.directionOfTraining
      }, 
      httpOptions
    )
  }
}
