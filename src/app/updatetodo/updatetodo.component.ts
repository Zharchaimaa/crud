import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-updatetodo',
  templateUrl: './updatetodo.component.html',
  styleUrls: ['./updatetodo.component.css']
})
export class UpdatetodoComponent implements OnInit {
  id: number;
  task: Todo;
  submitted = false;
  constructor(private router: ActivatedRoute,private route: Router,private todoService: TodoService) { }

  ngOnInit(): void {
    this.task = new Todo();

    this.id = this.router.snapshot.params['id'];
    
    this.todoService.getTodoById(this.id)
      .subscribe(data => {
        console.log(data)
        this.task = data;
      }, error => console.log(error));
  }
  updateTask() {
    this.todoService.updateT( this.id,this.task)
      .subscribe(data => console.log(data), error => console.log(error));
    this.task = new Todo();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.updateTask(); 
    //this.save();
  }

  gotoList() {
    this.route.navigate(['/todo']);
  }
}
