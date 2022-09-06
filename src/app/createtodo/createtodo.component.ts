import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-createtodo',
  templateUrl: './createtodo.component.html',
  styleUrls: ['./createtodo.component.css']
})
export class CreatetodoComponent implements OnInit /*,OnDestroy*/{
  todo;
 /* myform:FormGroup;
  label: FormControl;
  Completed: FormControl;*/
  Todo=new Todo();
    submitted = false;
    //form:NgForm;
    //subscription : Subscription; 
  constructor(private router: Router,private todoService: TodoService) { }

  ngOnInit(): void {
    this.newTask();

  }
  newTask(): void {
    this.submitted = false;
    /*this.label = new FormControl('', Validators.required);
    this.Completed = new FormControl('', Validators.required);*/
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
 /* clear(){
    this.myform.reset();
    this.submitted = false;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }*/
}
