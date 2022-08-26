import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '../model/file';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.css']
})
export class FileDetailsComponent implements OnInit {
  id:number;
  file: File;
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: UserService) { }

  ngOnInit(): void {
    this.file = new File();

    this.id = this.route.snapshot.params['id'];
    
    this.employeeService.getAllUserById(this.id)
      .subscribe(data => {
        console.log(data)
        this.file[0]= data;
      }, error => console.log(error));

  }
  list(){
    this.router.navigate(['/']);
  }
}
