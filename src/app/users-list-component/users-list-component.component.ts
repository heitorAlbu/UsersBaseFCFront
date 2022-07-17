import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersServiceService } from '../users-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users-list-component',
  templateUrl: './users-list-component.component.html',
  styleUrls: ['./users-list-component.component.css']
})
export class UsersListComponentComponent implements OnInit {

  usersList$: any =[] ;
  showModalEdit = false;
  constructor(private service : UsersServiceService) { }

  ngOnInit() : void {
    this.service.getUsers().subscribe((res:any) => {
      this.usersList$ = res.collections
    });

  }
  modalTitle = '';
  activateUserRegisterComponent:boolean = false;
  user:any;

  modalAddUser(){
    // this.user = {
    //   id :0,
    //   name:null,
    //   password:null,
    //   email:null,
    //   fone:null,
    //   cpf:null,
    //   birthDate:null,
    //   inclusionDate:null,
    //   motherName:null,
    //   isActive:true
    // }
    this.modalTitle = 'Novo usuário';
    this.activateUserRegisterComponent = true;
  }

  modalEditUser(item:any){
    this.showModalEdit = true;
    this.user = item;
    this.modalTitle = 'Editar usuário';
    this.activateUserRegisterComponent = true;
  }
}
