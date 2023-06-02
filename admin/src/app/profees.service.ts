import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prof } from './prof';

@Injectable({
  providedIn: 'root'
})
export class ProfeesService {

  private profUrl: string;
  private profsesUrl: string;
  constructor(private http: HttpClient) {
    this.profUrl = 'http://localhost:8080/api/professors/';
  }

  public findAll(): Observable<Prof[]> {
    return this.http.get<Prof[]>(this.profUrl);
  }

  public save(user: Prof) {
    return this.http.post<Prof>(this.profUrl, user);

  }
  deleteprof(profId: number): Observable<any> {
    return this.http.delete(`${this.profUrl}${profId}`);
  }
  
  findById(profId: number): Observable<Prof> {
    return this.http.get<Prof>(`${this.profUrl}${profId}`);
  }

  updateCourse(course: Prof): Observable<Prof> {
    const url = `${this.profUrl}${course.id}`;
    return this.http.put<Prof>(url, course);
  }

  getCourse(courseId: number): Observable<Prof> {
    const url = `${this.profUrl}${courseId}`;
    return this.http.get<Prof>(url);
  }
}
