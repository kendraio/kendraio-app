import { Injectable } from '@angular/core';
import { IUser } from 'src/app/_models/classes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BloomenUsersService {

  constructor(private http: HttpClient) { }




  create(user: IUser): any {
    localStorage.setItem('currentuser', JSON.stringify(user));
  //  return this.http.post<IUser>(`${environment.appApi.baseUrl}/accounts/register`, contact)
  }

//   update(contact: IUser): Observable<any> {
//     const user = <IUser>JSON.parse(localStorage.getItem('currentUser'))
//     contact.id = user.id;
//     return user;
//  //   return this.http.put<any>(`${environment.appApi.baseUrl}/accounts`, contact)
//   }


}
