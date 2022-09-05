import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  id:number;
  todo: Todo;
  empList : Todo[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private todoService: TodoService) { }

  ngOnInit(): void {
    this.todo = new Todo();

    this.id = this.route.snapshot.params['id'];
    
    this.todoService.getTodoById(this.id)
      .subscribe(data => {
        console.log(data)
        this.todo = data;
      }, error => console.log(error));

  }
  list(){
    this.router.navigate(['/todo']);
  }
}
