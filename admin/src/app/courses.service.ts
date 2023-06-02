import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from './course';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
const apiUrl = '/api/courses';
@Injectable({
  providedIn: 'root'
})


export class CoursesService {

  private CoursesUrl: string;
  private backendUrl = 'http://localhost:8080/api'; // Replace with your backend URL

  constructor(private http: HttpClient) {
    this.CoursesUrl = 'http://localhost:8080/api/courses/';
  }

  public findAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.CoursesUrl);
  }

  public save(user: Course) {
    return this.http.post<Course>(this.CoursesUrl, user);
    
  }

  
  

  
  findById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${this.CoursesUrl}'/courses/'${courseId}`);
  }



  // deleteCourse(courseId: number): Observable<any> {
  //   return this.http.delete(`${this.backendUrl}${courseId}`);
  // }

  deleteCourse(courseId: number): Observable<any> {
    const url = `${this.backendUrl}/courses/${courseId}`;
    return this.http.delete(url);}
  

  updateCourse(course: Course) {
    const url = `${this.backendUrl}/courses/${course.courseId}`;
    return this.http.put<Course>(url, course);
  }


  // updateCourse(course: Course): Observable<Course> {
  //   const url = `${this.backendUrl}/courses/${course.id}`;
  //   return this.http.put<Course>(url, course);
  // }



  getCourse(courseId: number): Observable<Course> {
    const url = `${this.backendUrl}/courses/${courseId}`;
    return this.http.get<Course>(url);
  }

}


