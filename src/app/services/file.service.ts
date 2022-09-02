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
  constructor(private http: HttpClient) { }

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
