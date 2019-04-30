import { Injectable } from '@angular/core';
import { IUser } from 'src/app/_models/classes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BloomenUsersService {

  constructor(private http: HttpClient) { }


  // {
  //   "username": "string",
  //   "password": "string",
  //   "email": "string",
  //   "invitation": "string"
  // }




  create(bloomenUser: any): any {

    bloomenUser = this.userMapper(bloomenUser)
    localStorage.setItem('currentuser', JSON.stringify(bloomenUser));
    //  return this.http.post<IUser>(`${environment.appApi.baseUrl}/accounts/register`, contact)
    return this.http.post<any>('https://bloomen.herokuapp.com/auth/register', bloomenUser);
  }


  userMapper(user: any) {
    const mappedUser = {
      'username': user.logonDetails.username,
      'password': user.logonDetails.password,
      'email': user.accountDetails.email,
      'invitation': 'invitationString'
    };

    return mappedUser;

  }
  //   update(contact: IUser): Observable<any> {
  //     const user = <IUser>JSON.parse(localStorage.getItem('currentUser'))
  //     contact.id = user.id;
  //     return user;
  //  //   return this.http.put<any>(`${environment.appApi.baseUrl}/accounts`, contact)
  //   }


}
