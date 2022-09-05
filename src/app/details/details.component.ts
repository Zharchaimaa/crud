import { UserService } from './../services/user.service';
import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id:number;
employee: User;
empList : User[] = [];
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: UserService) { }

  ngOnInit(): void {
    this.employee = new User();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));

  }
  list(){
    this.router.navigate(['/gestion']);
  }

}
