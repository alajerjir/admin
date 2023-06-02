import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Prof } from 'app/prof';
import { ProfeesService } from 'app/profees.service';
import { SharedService } from 'app/shared.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent {
  prof !: Prof ;

  constructor(
    private route: ActivatedRoute,
      private router: Router,
        private CourseService: ProfeesService) {
    this.prof = new Prof();
  }
  
  onSubmit() {
    this.CourseService.save(this.prof).subscribe(result => this.goToCourseList());
  }
 
  goToCourseList() {
    this.router.navigate(['/table-list']);
  }
}
