import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { File } from '../model/file';
import { FileService } from '../services/file.service';


@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css']
})
export class VisualiserComponent implements OnInit {
  files: Observable<File[]>;
  fileList : File[] = [];
  filename:any;
  constructor(private userService: FileService,private route :Router) { }

  ngOnInit(): void {
    this.getAllFile();
  }
  getAllFile(){
    this.userService.getAllFile().subscribe(res=>{
      console.log(res);
      this.fileList = res;
    },err=>{
      console.log("erreur")
    });
  }
  fileDetails(id:number){
    this.route.navigate(['files',id]);
  }
  Search(){
    if(this.filename ==""){
      this.ngOnInit();
    }else{
      this.fileList = this.fileList.filter(res =>{
        return res.filename.toLocaleLowerCase().match(this.filename.toLocaleLowerCase());
      });
    }
  }
  sort(){
    this.fileList= this.fileList.sort((a:any,b:any)=>{return b.id-a.id})
    
  }
  sortV1(){
    this.fileList= this.fileList.sort((a:any,b:any)=>{return a.id-b.id})
    
  }
  /*sortv2(){
    this.fileList.sort(function (x, y) {
      let a = new Date(x.validDate),
          b = new Date(y.validDate);
      return a - b;
  });
  }*/
  sortV3(){
    this.fileList.sort(function (x, y) {
      let a = x.filename.toUpperCase(),
          b = y.filename.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
  });
  }
  sortV4(){
    this.fileList.sort(function (x, y) {
      let a = x.filename.toUpperCase(),
          b = y.filename.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
  });
  }

}
