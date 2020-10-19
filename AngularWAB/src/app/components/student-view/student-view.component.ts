import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators, Form } from '@angular/forms';
import { WebService } from 'src/app/sevices/web.service';
import { Student } from 'src/app/interface/student.interface';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit {

  ngOnInit(): void {
    this.createForm();
    this.getData();
  }
  url: string = 'student';
  title = 'Spring Boot + Angular 8 CRUD Example';
  usersList: Array<Student>
  student: Student = undefined
  myForm: FormGroup;

  constructor(private webService: WebService, private formBuilder: FormBuilder) { }


  private createForm() {
    this.myForm = this.formBuilder.group({
      planName: new FormControl(this.student ? this.student.planName : '', Validators.required),
      websiteType: new FormControl(this.student ? this.student.websiteType : '', Validators.required),
      info: new FormControl(this.student ? this.student.info : '', Validators.required)
    });
  }
  private submitForm(data: FormGroup) {
    if (data.valid)
      this.addStudent(data.value)
  }

  getData(): void {
    this.webService.get(this.url).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.usersList = response.data
    })
  }

  addStudent(student: Student): void {
    if (this.student)
      student.id = this.student.id
    this.webService.post(this.url, student).subscribe(res => {
      let response = JSON.parse(JSON.stringify(res))
      this.getData()
      this.myForm.reset()
      this.student = undefined
    }, error => {
    })
  }

  edit(student: Student): void {
    this.student = student
    this.myForm.controls['planName'].setValue(this.student.planName)
    this.myForm.controls['websiteType'].setValue(this.student.websiteType)
    this.myForm.controls['info'].setValue(this.student.info)
  }

  delete(student: Student): void {
    this.webService.delete(this.url, student).subscribe(res => {
      let data = JSON.parse(JSON.stringify(res))
      this.getData()
    }, error => {
    })
  }
}
