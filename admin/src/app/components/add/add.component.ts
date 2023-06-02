import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'app/course';
import { CoursesService } from 'app/courses.service';
import { SharedService } from 'app/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  {
  course !: Course ;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private CourseService: CoursesService) {
    this.course = new Course();
  }
  
  onSubmit() {
    this.CourseService.save(this.course).subscribe(result => this.goToCourseList());
  }
 
  goToCourseList() {
    this.router.navigate(['/typography']);
  }
}
