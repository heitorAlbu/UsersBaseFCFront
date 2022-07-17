import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersServiceService } from '../users-service.service';

@Component({
  selector: 'app-users-list-component',
  templateUrl: './users-list-component.component.html',
  styleUrls: ['./users-list-component.component.css']
})
export class UsersListComponentComponent implements OnInit {

  usersList$: any =[] ;

  constructor(private service : UsersServiceService) { }

  ngOnInit() : void {
    this.service.getUsers().subscribe((res:any) => {
      console.log('res',res)
      this.usersList$ = res.collections
    });

  }

}
