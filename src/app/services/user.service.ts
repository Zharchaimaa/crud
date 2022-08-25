import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/app/test/user';
  private adminUrl = 'http://localhost:8080/app/test/admin';
  private addEmpURL = 'http://localhost:8080/app/admin/addAllUsers';
  private getEmpURL = 'http://localhost:8080/app/admin/getAllUsers';
  private updateEmpUrl = 'http://localhost:8080/app/auth/updateUser';
  private deleteEmpUrl = 'http://localhost:8080/app/admin/delete';

  
  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  getAllUser() : Observable<User[]>{
    return this.http.get<User[]>(this.getEmpURL);
  }
  addUser(user : User) : Observable<User>{
    return this.http.post<User>(this.addEmpURL,user);
  }
  update(user:User) : Observable<User>{
    return this.http.put<User>(this.updateEmpUrl,user);
  }
  deleteUser(user:User) : Observable<User>{
    return this.http.delete<User>(this.deleteEmpUrl+'/'+user.id);
  }
}

