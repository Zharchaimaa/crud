import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '../model/file';
import { FileService } from '../services/file.service';
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
    private fileService: FileService) { }

  ngOnInit(): void {
    this.file = new File();

    this.id = this.route.snapshot.params['id'];
    
    this.fileService.getFileById(this.id)
      .subscribe(data => {
        console.log(data)
        this.file= data;
      }, error => console.log(error));

  }
  list(){
    this.router.navigate(['/visualiser']);
  }
}
