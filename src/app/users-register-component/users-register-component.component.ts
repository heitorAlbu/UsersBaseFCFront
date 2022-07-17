import { Component, Input, OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { FormBuilder,FormGroup,FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
@Component({
  selector: 'app-users-register-component',
  templateUrl: './users-register-component.component.html',
  styleUrls: ['./users-register-component.component.css']
})
export class UsersRegisterComponentComponent implements OnInit {
  formUserRegister: FormGroup;
  constructor(private service: UsersServiceService, private formBuilder:FormBuilder) {
    this.formUserRegister = this.formBuilder.group({
      id :0,
      name:'',
      password:'',
      email:'',
      fone:'',
      cpf:'',
      birthDate:'',
      inclusionDate:'',
      motherName:'',
      isActive:true
    })
   }
   get f() {return this.formUserRegister.controls;}

  ngOnInit():void  {}


  register(formUserRegister :any ){
    this.service.addUser(formUserRegister).subscribe((res:any) => {
      console.log('res',res)
      this.formUserRegister.reset();

    })

  }
}
