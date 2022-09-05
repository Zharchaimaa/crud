import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { File } from '../model/file';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  private userUrl = 'http://localhost:8080/app/test/user';
  private adminUrl = 'http://localhost:8080/app/test/admin';
  private getFileURL = 'http://localhost:8080/app/admin/getAllFiles';
  private getFileUser= 'http://localhost:8080/app/user/getAllFiles';
  private getFileIdURL = 'http://localhost:8080/app/admin/getAllFileById';
  private countFileOKUrl = 'http://localhost:8080/app/admin/countFileOK';
  private countVNOKUrl = 'http://localhost:8080/app/admin/countVNOK';
  private countVNKOUrl = 'http://localhost:8080/app/admin/countVNKO';
  private countVDOKUrl = 'http://localhost:8080/app/admin/countVDOK';
  private countVDKOUrl = 'http://localhost:8080/app/admin/countVDKO';
  private countVCOKUrl = 'http://localhost:8080/app/admin/countVCOK';
  private countVCKOUrl = 'http://localhost:8080/app/admin/countVCKO';
  private countVMOKUrl = 'http://localhost:8080/app/admin/countVMOK';
  private countVMKOUrl = 'http://localhost:8080/app/admin/countVMKO';
  constructor(private http: HttpClient) { }
  countFileOK():Observable<number>{
    return this.http.get<number>(this.countFileOKUrl);
  }
  countVNOK():Observable<number>{
    return this.http.get<number>(this.countVNOKUrl);
  }
  countVNKO():Observable<number>{
    return this.http.get<number>(this.countVNKOUrl);
  }
  countVDOK():Observable<number>{
    return this.http.get<number>(this.countVDOKUrl);
  }
  countVDKO():Observable<number>{
    return this.http.get<number>(this.countVDKOUrl);
  }
  countVMOK():Observable<number>{
    return this.http.get<number>(this.countVMOKUrl);
  }
  countVMKO():Observable<number>{
    return this.http.get<number>(this.countVMKOUrl);
  }
  countVCOK():Observable<number>{
    return this.http.get<number>(this.countVCOKUrl);
  }
  countVCKO():Observable<number>{
    return this.http.get<number>(this.countVCKOUrl);
  }
  
  
  

  getFileById(id :number) : Observable<File>{
    return this.http.get<File>(this.getFileIdURL+'/'+id);
  }
  getAllFile() : Observable<File[]>{
    return this.http.get<File[]>(this.getFileURL);
  }
  getAllFileU() : Observable<File[]>{
    return this.http.get<File[]>(this.getFileUser);
  }
}
