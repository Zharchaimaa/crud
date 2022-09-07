import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { File } from '../model/file';
import { FileService } from '../services/file.service';
import Swal from 'sweetalert2'
import { UserService } from '../services/user.service';
import * as XLSX from 'xlsx'; 

@Component({
  selector: 'app-visualiser',
  templateUrl: './visualiser.component.html',
  styleUrls: ['./visualiser.component.css']
})
export class VisualiserComponent implements OnInit {
  fileName= 'ExcelFile.xlsx';  
  files: Observable<File[]>;
  fileList : File[] = [];
  id:any;
  filename:any;
  entite:any;
  filedate:any;
  dateTraitement:any;
  constructor(private fileService: FileService,private route :Router,private userService: UserService) { }

  ngOnInit(): void {
    this.getAllFile();
  }
  getAllFile(){
    this.fileService.getAllFile().subscribe(res=>{
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
    if(this.entite ==""){
      this.ngOnInit();
    }else{
      this.fileList = this.fileList.filter(res =>{
        return res.entite.toLocaleLowerCase().match(this.entite.toLocaleLowerCase());
      });
    }
  }
  Search1(){
    if(this.filename ==""){
      this.ngOnInit();
    }else{
      this.fileList = this.fileList.filter(res =>{
        return res.filename.toLocaleLowerCase().match(this.filename.toLocaleLowerCase());
      });
    }
  }
  Search4(){
    if(this.dateTraitement ==""){
      this.ngOnInit();
    }else{
      this.fileList = this.fileList.filter(res =>{
        return res.dateTraitement.match(this.dateTraitement);
      });
    }
  }
  Search2(){
    if(this.filedate ==""){
      this.ngOnInit();
    }else{
      this.fileList = this.fileList.filter(res =>{
        return res.filedate.match(this.filedate);
      });
    }
  }
  Search3(){
    if(this.id ==""){
      this.ngOnInit();
    }else{
      this.fileList = this.fileList.filter(res =>{
        return res.id.match(this.id);
      });
    }
  }
  sort(){
    this.fileList= this.fileList.sort((a:any,b:any)=>{return b.id-a.id})
    
  }
  sortV1(){
    this.fileList= this.fileList.sort((a:any,b:any)=>{return a.id-b.id})
    
  }
  
  sortV2(){
    this.fileList.sort(function (x, y) {
      let a = x.entite.toUpperCase(),
          b = y.entite.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
  });
  }
  sortV4(){
    this.fileList.sort(function (x, y) {
      let a = x.entite.toUpperCase(),
          b = y.entite.toUpperCase();
      return a == b ? 0 : a < b ? 1 : -1;
  });
  }
  sortV3(){
    this.fileList.sort(function (x, y) {
      let a = x.filename.toUpperCase(),
          b = y.filename.toUpperCase();
      return a == b ? 0 : a > b ? 1 : -1;
  });
  }
  sortV5(){
    this.fileList.sort(function (x, y) {
      let a = x.filename.toUpperCase(),
          b = y.filename.toUpperCase();
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
          
          this.getAllFile();
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

  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('excel-table'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);
			
    }
}
