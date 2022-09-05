import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
employee;
User=new User();
  submitted = false;
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
    this.newEmployee();
  }
  newEmployee(): void {
    this.submitted = false;
    this.employee = new User();
  }
  save() {
    this.userService.addUser(this.employee)
      .subscribe(data => 
        {
          console.log(data)
          //this.save();
        }, error => console.log(error));
    this.employee = new User();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/gestion']);
  }

}
