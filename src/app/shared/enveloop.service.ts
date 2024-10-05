import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnveloopService {
  private apiUrl = 'https://api.enveloop.com';
  // private apiKey = 'test_bu0QVfX+zYxtyZ+wSvYBPt83zXnB7xGV';
  private apiKey = 'live_3AJqsZ+vvUd+QNDaCq0dvt7VmA5eO6IO --';

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });
  }

  public sendEmail(data: any): Observable<any> {
    const url = `${this.apiUrl}/messages`;
    return this.http.post(url, data, { headers: this.getHeaders() });
  }
}
