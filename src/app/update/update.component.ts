import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: number;
  employee: User;
  submitted = false;
  constructor(private router: ActivatedRoute,private route: Router,private userService: UserService) { }

  ngOnInit(): void {
    this.employee = new User();

    this.id = this.router.snapshot.params['id'];
    
    this.userService.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));
  }
  updateEmployee() {
    this.userService.updateU( this.id,this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new User();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.updateEmployee(); 

  }

  gotoList() {
    this.route.navigate(['/']);
  }

}
