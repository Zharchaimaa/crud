import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private addTodoURL = 'http://localhost:8080/app/user/addMessage';
  constructor(private http: HttpClient) { }
  addMessage(message : Message) : Observable<Message>{
    return this.http.post<Message>(this.addTodoURL,message);
  }
}
