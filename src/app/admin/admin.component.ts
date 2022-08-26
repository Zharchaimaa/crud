import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  board: string;
  errorMessage: string;
  empList : User[] = [];
  empObj : User = new User();
  username:any;
  p : number = 1;
   empDetail : FormGroup;
   isAdded;
   isUpdated;
  constructor(private userService: UserService,private route :Router) { }

  ngOnInit() {

 this.isUpdated=true;
    this.getAllUser();
  }
  logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }
  getAllUser(){
    this.userService.getAllUser().subscribe(res=>{
      console.log(res);
      this.empList = res;
    },err=>{
      console.log("erreur")
    });
  }
  Search(){
    if(this.username ==""){
      this.ngOnInit();
    }else{
      this.empList = this.empList.filter(res =>{
        return res.email.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
      });
    }
  }
  vider(){
    console.log(this.isAdded);
    this.isAdded=true;
    this.isUpdated=true;
    console.log(this.isAdded);
  }
  key : string ='id';
  reverse:boolean = false;
  sort(key:any){
    this.key = key;
    this.reverse= !this.reverse
    }
    addUser(){
      
      this.isUpdated=true;
      this.isAdded=true;
      console.log(this.isAdded);
      console.log(this.empDetail);
      this.empObj.id = this.empDetail.value.id;
      this.empObj.email = this.empDetail.value.email;
      this.empObj.username =this.empDetail.value.username;
      this.empObj.role = this.empDetail.value.role;
  
      this.userService.addUser(this.empObj).subscribe(res=>{
        console.log(res);
        this.getAllUser();
  
      },err=>{
        console.log(err);
      }); 
    }
    editUser(user : User){
      /* this.empDetail.controls['id'].setValue(user.id);
      this.empDetail.controls['name'].setValue(user.email);
      this.empDetail.controls['username'].setValue(user.username);
      this.empDetail.controls['role'].setValue(user.role);*/ 
     }
  
     updateUser() {
  this.isUpdated=true;
      /* this.empObj.id = this.empDetail.value.id;
      this.empObj.email = this.empDetail.value.email;
      this.empObj.username = this.empDetail.value.username;
      this.empObj.role = this.empDetail.value.role;
  
      this.userService.update(this.empObj).subscribe(res=>{
        console.log(res);
        this.getAllUser();
      },err=>{
        console.log(err);
      }) */
  
    }
  
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
}
