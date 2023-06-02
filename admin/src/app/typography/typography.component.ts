import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'app/course';
import { CoursesService } from 'app/courses.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css']
})
export class TypographyComponent implements OnInit {
  courses !: Course [];
 

  constructor(private courseService : CoursesService,private http:HttpClient, private router: Router,) { }

  ngOnInit() {
    this.getCourses();
  }


 
  editCourse(courseId: number) {
    this.router.navigate(['update', courseId]);
  }

  deleteCourse(id: number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.courseService.deleteCourse(id).subscribe(
        () => {
          console.log('Course deleted successfully!');
          // Handle success case, e.g., refresh the course list
          this.getCourses();
        },
        error => {
          console.error('Error deleting course:', error);
          // Handle error case
        }
      );
    }
  }


  getCourses() {
    this.courseService.findAll().subscribe(
      (data: Course[]) => {
        this.courses = data;
      },
      error => {
        console.error('Error retrieving courses:', error);
        // Handle error case
      }
    );
  }

}



   

