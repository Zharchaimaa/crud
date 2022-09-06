import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private getTodoURL = 'http://localhost:8080/app/admin/getAlltodoList';
  private getTodoIdURL = 'http://localhost:8080/app/admin/getTodoListById';
  private addTodoURL = 'http://localhost:8080/app/admin/addTodo';
  private updateTodoUrl = 'http://localhost:8080/app/admin/updTask';
  private deleteTodoUrl = 'http://localhost:8080/app/admin/deleteTodo';
  constructor(private http: HttpClient) { }
  addTodo(todo : Todo) : Observable<Todo>{
    return this.http.post<Todo>(this.addTodoURL,todo);
  }
  getTodoById(id :number) : Observable<Todo>{
    return this.http.get<Todo>(this.getTodoIdURL+'/'+id);
  }
  getAllTodo() : Observable<Todo[]>{
    return this.http.get<Todo[]>(this.getTodoURL);
  }
  deleteTodo(todo:Todo) : Observable<Todo>{
    return this.http.delete<Todo>(this.deleteTodoUrl+'/'+todo.id);
  }
  updateT(id :number,todo:Todo) : Observable<Todo>{
    return this.http.put<Todo>(this.updateTodoUrl+'/'+id,todo);
  }

}
