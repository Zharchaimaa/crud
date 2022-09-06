import { Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-gestion-m',
  templateUrl: './gestion-m.component.html',
  styleUrls: ['./gestion-m.component.css']
})
export class GestionMComponent implements OnInit {
messages : Message[]=[];
username:any;

  constructor(private userService : UserService, private route :Router) { }

  ngOnInit(): void {
    this.getAllMessages();
  }
  getAllMessages(){
    this.userService.getAllMessage().subscribe(res=>{
      console.log(res);
      this.messages = res;
    },err=>{
      console.log("erreur")
    });
  }
  deleteMessage(msg : Message) {
    Swal.fire({
      title:'Êtes-vous sûr de vouloir supprimer ?',
      text:"Voulez vous supprimer ce Message ?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Supprimer'
    }).then((result)=>{
      if(result.isConfirmed){
        this.userService.deleteMessage(msg).subscribe(res=>{
          console.log(res);
          //alert('Message deleted successfully');
          this.getAllMessages();
        },err => {
          console.log(err);
        });
    
          Swal.fire({
            title: 'Deleted!',
            text:'message has been deleted.',
            icon: 'success',
            timer: 3000})
      }
    })
    
      }
      employeeDetails(id :number){
        this.route.navigate(['details',id]);
      }
      Search(){
        if(this.username ==""){
          this.ngOnInit();
        }else{
          this.messages = this.messages.filter(res =>{
            return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
          });
        }
      }
      sort(){
        this.messages= this.messages.sort((a:any,b:any)=>{return b.id-a.id})
      }
      sortV1(){
        this.messages= this.messages.sort((a:any,b:any)=>{return a.id-b.id})
      }
      sortV2(){
        this.messages.sort(function (x, y) {
          let a = x.email.toUpperCase(),
              b = y.email.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
      });
      }
      sortV4(){
        this.messages.sort(function (x, y) {
          let a = x.email.toUpperCase(),
              b = y.email.toUpperCase();
          return a == b ? 0 : a < b ? 1 : -1;
      });
      }
      sortV3(){
        this.messages.sort(function (x, y) {
          let a = x.username.toUpperCase(),
              b = y.username.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
      });
      }
      sortV5(){
        this.messages.sort(function (x, y) {
          let a = x.username.toUpperCase(),
              b = y.username.toUpperCase();
          return a == b ? 0 : a < b ? 1 : -1;
      });
      }
      editMessage(data:any){
        //this.route.navigate(['/modifierM',data]);
       // this.myemp = emp;
       
      this.route.navigate(['/modifier']);
  
      }
      messageDetails(id:number){
        this.route.navigate(['detailsM',id]);
      }
}
