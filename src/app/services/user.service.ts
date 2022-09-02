import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Message } from '../model/message';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8080/app/test/user';
  private adminUrl = 'http://localhost:8080/app/test/admin';
  private addEmpURL = 'http://localhost:8080/app/admin/addUsers';
  private getEmpURL = 'http://localhost:8080/app/admin/getAllUsers';
  private getEmpIdURL = 'http://localhost:8080/app/admin/getAllUserById';
  private updateEmpUrl = 'http://localhost:8080/app/auth/updateUser';
  private deleteEmpUrl = 'http://localhost:8080/app/admin/delete';
  private exporterEmpUrl = 'http://localhost:8080/app/admin/users/export/excel';
  private countEmpUrl = 'http://localhost:8080/app/admin/count';
  private getMsgURL = 'http://localhost:8080/app/admin/getAllUsers';
  private deleteMsgUrl = 'http://localhost:8080/app/admin/delete';
  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  getUserById(id :number) : Observable<User>{
    return this.http.get<User>(this.getEmpIdURL+'/'+id);
  }
  getAllUser() : Observable<User[]>{
    return this.http.get<User[]>(this.getEmpURL);
  }
  addUser(user : User) : Observable<User>{
    return this.http.post<User>(this.addEmpURL,user);
  }
  updateU(id :number,user:User) : Observable<User>{
    return this.http.put<User>(this.updateEmpUrl+'/'+id,user);
  }
  update(user:User) : Observable<User>{
    return this.http.put<User>(this.updateEmpUrl,user);
  }
  deleteUser(user:User) : Observable<User>{
    return this.http.delete<User>(this.deleteEmpUrl+'/'+user.id);
  }
  exporter():Observable<User[]>{
    return this.http.get<User[]>(this.exporterEmpUrl);
  }
  count():Observable<number>{
    return this.http.get<number>(this.countEmpUrl);
  }
  getAllMessage() : Observable<Message[]>{
    return this.http.get<Message[]>(this.getMsgURL);
  }
  deleteMessage(msg:Message) : Observable<Message>{
    return this.http.delete<Message>(this.deleteMsgUrl+'/'+msg.id);
  }
}

