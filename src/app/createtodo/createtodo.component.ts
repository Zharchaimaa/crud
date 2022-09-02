import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.css']
})
export class CreatetodoComponent implements OnInit {
  todo;
  Todo=new Todo();
    submitted = false;
  constructor(private router: Router,private todoService: TodoService) { }

  ngOnInit(): void {
    this.newTask();
  }
  newTask(): void {
    this.submitted = false;
    this.todo = new Todo();
  }
  save() {
    this.todoService.addTodo(this.todo)
      .subscribe(data => 
        {
          console.log(data)
          //this.save();
        }, error => console.log(error));
    this.todo = new Todo();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/todo']);
  }
}
