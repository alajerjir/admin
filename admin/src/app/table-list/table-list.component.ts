import { Component, OnInit } from '@angular/core';
import { Prof } from 'app/prof';
import { ProfeesService } from 'app/profees.service';


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})


export class TableListComponent implements OnInit {
  profs !: Prof [];

  constructor(private profservice : ProfeesService) { }

  ngOnInit() {
    this.profservice.findAll().subscribe(data => {
      this.profs = data;
    });
  }
  deleteprof(profId: number) {
    if (confirm('Are you sure you want to delete this prof?')) {
      this.profservice.deleteprof(profId).subscribe(
        response => {
          console.log('Course deleted successfully!', response);
          // Refresh the course list
          this.profservice.findAll().subscribe(data => {
            this.profs = data;
          });
        },
        error => {
          console.error('Error deleting profs:', error);
        }
      );
    }
  }


}
