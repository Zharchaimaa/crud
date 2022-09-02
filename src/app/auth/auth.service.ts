import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
//import { SignUpInfo } from './signup-info';
import { User } from '../model/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
id :any;
  private loginUrl = 'http://localhost:8080/app/auth/login';
  /*private addEmpURL = 'http://localhost:8080/app/admin/addUsers';
  private getEmpURL = 'http://localhost:8080/app/admin/getUsers';
  private updateEmpUrl = 'http://localhost:8080/app/auth/updateUser';
  private deleteEmpUrl = 'http://localhost:8080/app/admin/deleteUser';*/
  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  /*signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
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
  }*/
}
