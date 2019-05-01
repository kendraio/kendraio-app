import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate([{ outlets: { popup: null } }]);
    }, 3000);
  }



routeFn(rt: string) {
  
      this.router.navigate(['bloomen/users/' + rt]) ;
    }


}
