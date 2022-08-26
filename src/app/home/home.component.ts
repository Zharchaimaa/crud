import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TokenStorageService } from '../auth/token-storage.service';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  info: any;
  empList : User[] = [];
  username:any;
  constructor(private userService: UserService,private route :Router,private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getAllUser();
  }
  getAllUser(){
    this.userService.getAllUser().subscribe(res=>{
      console.log(res);
      this.empList = res;
    },err=>{
      console.log("erreur")
    });
  }
  logout() {
    this.token.signOut();
    window.location.reload();
  }
  /*key : string ='id';
  reverse:boolean = false;
  sort(key:any){
    this.key = key;
    this.reverse= !this.reverse
    }*/
    deleteUser(emp : User) {
  
      this.userService.deleteUser(emp).subscribe(res=>{
        console.log(res);
        alert('User deleted successfully');
        this.getAllUser();
      },err => {
        console.log(err);
      });
  
    }
    employeeDetails(id :number){
      this.route.navigate(['details',id]);
    }
    Search(){
      if(this.username ==""){
        this.ngOnInit();
      }else{
        this.empList = this.empList.filter(res =>{
          return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
        });
      }
    }
    sort(){
      this.empList= this.empList.sort((a:any,b:any)=>{return b.id-a.id})
    }
    sortV1(){
      this.empList= this.empList.sort((a:any,b:any)=>{return a.id-b.id})
    }
}
