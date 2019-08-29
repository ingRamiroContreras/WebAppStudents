import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  public API = '//localhost:8090';
  public STUDENT_API = this.API + '/students';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.STUDENT_API + '/students');
  }

  getById(id: string): Observable<any> {
    return this.http.get(this.STUDENT_API + '/students/' + id);
  }

  save(student: any): Observable<any> {
    let result: Observable<any>;

    result = this.http.post(this.STUDENT_API + '/students/', student);

    return result;
  }

  remove(id: string) {
    return this.http.delete(this.STUDENT_API + '/students/' + id);
  }


}
