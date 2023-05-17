
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Skills } from '../model/skills.model';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private apiUrl = 'api/skills';
  constructor(private http: HttpClient) { }

  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.apiUrl).pipe(
      retry(2),
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }
  updateLikes(skills: Skills): Observable<Skills> {
    const url = `${this.apiUrl}/${skills.id}`;
    return this.http.put<Skills>(url, skills).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  /*   return this.http.put(`${this.apiUrl}/${skills.id}`, skills).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    ); */
  }
}
