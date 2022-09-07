import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from '../auth/token-storage.service';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2'
import * as XLSX from 'xlsx'; 
@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit {
  fileName= 'ExcelSheet.xlsx'; 
  info: any;
  empList : User[] = [];
  username:any;
  p: number = 1;
  id:any;
  email:any;
  role:any;

    // collection: any[] = someArrayOfThings; 
  myemp:any={
    id:"",
    username:"",
    password:"",
    email:"",
    role:"",
    token:"" 
  }
  constructor(private userService: UserService,private route :Router,private token: TokenStorageService) { }

  ngOnInit(): void {
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
  Swal.fire({
    title:'Êtes-vous sûr de vouloir supprimer ?',
    text:"Voulez vous supprimer cet utilisateur ?",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Supprimer'
  }).then((result)=>{
    if(result.isConfirmed){
      this.userService.deleteUser(emp).subscribe(res=>{
        console.log(res);
        alert('User deleted successfully');
        this.getAllUser();
      },err => {
        console.log(err);
      });
  
        Swal.fire({
          title: 'Deleted!',
          text:'user has been deleted.',
          icon: 'success',
          timer: 3000})
    }
  })
      /*this.userService.deleteUser(emp).subscribe(res=>{
        console.log(res);
        alert('User deleted successfully');
        this.getAllUser();
      },err => {
        console.log(err);
      });
  */
    }
    employeeDetails(id :number){
      this.route.navigate(['details',id]);
    }
    Search(){
      if(this.id ==""){
        this.ngOnInit();
      }else{
        this.empList = this.empList.filter(res =>{
          return res.id.toLocaleLowerCase().match(this.id.toLocaleLowerCase());
        });
      }
    }
    Search1(){
      if(this.email ==""){
        this.ngOnInit();
      }else{
        this.empList = this.empList.filter(res =>{
          return res.email.toLocaleLowerCase().match(this.email.toLocaleLowerCase());
        });
      }
    }
    Search2(){
      if(this.username ==""){
        this.ngOnInit();
      }else{
        this.empList = this.empList.filter(res =>{
          return res.username.toLocaleLowerCase().match(this.username.toLocaleLowerCase());
        });
      }
    }
    Search3(){
      if(this.role ==""){
        this.ngOnInit();
      }else{
        this.empList = this.empList.filter(res =>{
          return res.role[0].toLocaleLowerCase().match(this.role.toLocaleLowerCase());
        });
      }
    }
    sort(){
      this.empList= this.empList.sort((a:any,b:any)=>{return b.id-a.id})
    }
    sortV1(){
      this.empList= this.empList.sort((a:any,b:any)=>{return a.id-b.id})
    }
    sortV2(){
      this.empList.sort(function (x, y) {
        let a = x.email.toUpperCase(),
            b = y.email.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
    });
    }
    sortV4(){
      this.empList.sort(function (x, y) {
        let a = x.email.toUpperCase(),
            b = y.email.toUpperCase();
        return a == b ? 0 : a < b ? 1 : -1;
    });
    }
    sortV3(){
      this.empList.sort(function (x, y) {
        let a = x.username.toUpperCase(),
            b = y.username.toUpperCase();
        return a == b ? 0 : a > b ? 1 : -1;
    });
    }
    sortV5(){
      this.empList.sort(function (x, y) {
        let a = x.username.toUpperCase(),
            b = y.username.toUpperCase();
        return a == b ? 0 : a < b ? 1 : -1;
    });
    }
    editEmploye(data:any){

      
     
    this.route.navigate(['/modifier',data]);

    }
    exporter(){
      Swal.fire({
        title:'Êtes-vous sûr de vouloir exporter ?',
        text:"Voulez vous exporter cette data ?",
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
            this.getAllUser();
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
