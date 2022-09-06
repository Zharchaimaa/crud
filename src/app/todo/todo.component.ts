import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../model/todo';
import { TodoService } from '../services/todo.service';
import Swal from 'sweetalert2'
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: Observable<Todo[]>;
  todoList : Todo[] = [];
  label:any;
  constructor(private todoService: TodoService,private route :Router,private userService: UserService) { }

  ngOnInit(): void {
    this.getAllTodo();
  }
  deleteTodo(todo : Todo) {
    Swal.fire({
      title:'Êtes-vous sûr de vouloir supprimer ?',
      text:"Voulez vous supprimer cette tache ?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Supprimer'
    }).then((result)=>{
      if(result.isConfirmed){
        this.todoService.deleteTodo(todo).subscribe(res=>{
          console.log(res);
          alert('task deleted successfully');
          this.getAllTodo();
        },err => {
          console.log(err);
        });
    
          Swal.fire({
            title: 'Deleted!',
            text:'task has been deleted.',
            icon: 'success',
            timer: 3000})
      }
    })
        /*this.userService.deleteUser(emp).subscribe(res=>{
          console.log(res);
          alert('User deleted successfully');
          this.getAllUser();
        },err => {
          console.log(err);
        });
    */
      }
  getAllTodo(){
    this.todoService.getAllTodo().subscribe(res=>{
      console.log(res);
      this.todoList = res;
    },err=>{
      console.log("erreur")
    });
  }
  editTask(data:any,id:number){
    this.route.navigate(['/modifiertodo',id]);
  }
  todoDetails(id :number){
    this.route.navigate(['/todoDetails',id]);
  }

 addTodo(){
    this.route.navigate(['/ajoutertodo']);
  }
  Search(){
    if(this.label ==""){
      this.ngOnInit();
    }else{
      this.todoList = this.todoList.filter(res =>{
        return res.label.toLocaleLowerCase().match(this.label.toLocaleLowerCase());
      });
    }
  }
  sort(){
    this.todoList= this.todoList.sort((a:any,b:any)=>{return b.id-a.id})
  }
  sortV1(){
    this.todoList= this.todoList.sort((a:any,b:any)=>{return a.id-b.id})
  }
  sortV2(){
    this.todoList.sort(function (x, y) {
      let a = x.label.toUpperCase(),
          b = y.label.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
  });
  }
  sortV3(){
    this.todoList.sort(function (x, y) {
      let a = x.label.toUpperCase(),
          b = y.label.toUpperCase();
      return a == b ? 0 : a < b ? 1 : -1;
  });
  }
  exporter(){
    Swal.fire({
      title:'Êtes-vous sûr de vouloir exporter ?',
      text:"Voulez vous exprter cette data ?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'exporter'
    }).then((result)=>{
      if(result.isConfirmed){
        this.userService.exporter().subscribe(res=>{
          console.log(res);
         // alert('User deleted successfully');
          //this.getAllUser();
          this.getAllTodo();
        },err => {
          console.log(err);
        });
    
          Swal.fire({
            title: 'exported!',
            text:'user has been exported.',
            icon: 'success',
            timer: 3000})
      }
    })
      
  }
}
