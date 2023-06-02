import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursesService } from 'app/courses.service';
import { Course } from 'app/course';

import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-course',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateCourseComponent implements OnInit {
  courseId: number;
  course: Course;
  courseForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private courseService: CoursesService
  ) {}


  ngOnInit() {
    this.courseId = +this.route.snapshot.paramMap.get('id');
    this.getCourseDetails();
    this.initializeForm();

  
  }

  getCourseDetails() {
    this.courseService.getCourse(this.courseId).subscribe(
      (data) => {
        this.course = data;
        this.updateFormValues();
      },
      (error) => {
        console.error('Error retrieving course details:', error);
      }
    );
  }

  initializeForm() {
    this.courseForm = this.formBuilder.group({
      title: ['', Validators.required],
      professorName: ['', Validators.required],
      // Add other form controls for other course properties
    });
  }

  updateFormValues() {
    this.courseForm.patchValue({
      title: this.course.title,
      professorName: this.course.professorName,
      // Update other form controls with the corresponding course properties
    });
  }

  updateCourse() {
    const updatedCourse: Course = {
      courseId: this.courseId,
      title: this.courseForm.value.title,
      professorName: this.courseForm.value.professorName,
      description : this.courseForm.value.title ,
       imageLink: this.courseForm.value.imageLink,
        level: this.courseForm.value.level,
         duration: this.courseForm.value.duration,
       prix: this.courseForm.value.prix,
      // Update other course properties with the corresponding form values
    };

    this.courseService.updateCourse(updatedCourse).subscribe(
      (response) => {
        console.log('Course updated successfully!', response);
        // Handle success case, e.g., show success message
      },
      (error) => {
        console.error('Error updating course:', error);
        // Handle error case, e.g., show error message
      }
    );
  }

}
