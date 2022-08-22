import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  // Get Request
  products(): Observable<any> {
    return this.http.get(this.url);
  }

  // Message Alert Method
  messageAlert() {
    alert('Thanks for Subscribing');
  }

  // Subject & Behaviour Subject
  // userName = new Subject<any>();
  userName = new BehaviorSubject('Virat Rawat');
}
