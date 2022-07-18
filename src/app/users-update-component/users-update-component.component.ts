import { Component, Input, Output,EventEmitter ,OnInit, ViewChild } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { FormBuilder,FormGroup,FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-users-update-component',
  templateUrl: './users-update-component.component.html',
  styleUrls: ['./users-update-component.component.css']
})
export class UsersUpdateComponentComponent implements OnInit {

  @Input() userItem : any;
  formUserUpdate: FormGroup;
  user:any;
  constructor(private service: UsersServiceService, private formBuilder:FormBuilder) {

    this.formUserUpdate = this.formBuilder.group({
      id :[''],
      name:[''],
      password:[''],
      email:[''],
      fone:[''],
      cpf:[''],
      birthDate:[''],
      changeDate:[''],
      motherName:[''],
      isActive:[]
    });

   }

   ngOnInit():void {
    this.setUpdateData();
    console.log('this.user',this.user);
    //this.setFormData(this.user);
    this.service.getUserById(this.userItem.Id).subscribe((res:any) => {
      res.collections
      //this.formUserUpdate.reset();
    });
  }
  get f() {return this.formUserUpdate.controls;}

  update(formUserUpdate :any ){
    this.service.updateUser(formUserUpdate).subscribe((res:any) => {
      console.log('res',res)
      this.formUserUpdate.reset();
    })
  }

  setUpdateData() {
      this.user = {
       id : this.userItem.id,
       name:this.userItem.name,
       //password:this.userItem.password,
       email:this.userItem.email,
       fone:this.userItem.fone,
       cpf:this.userItem.cpf,
       birthDate:this.userItem.birthDate,
       inclusionDate:this.userItem.inclusionDate,
       motherName:this.userItem.motherName,
       isActive:this.userItem.isActive
      }
       this.formUserUpdate = this.formBuilder.group({
        id :[this.user.id],
        name:[this.user.name],
        password:[''],
        email:[this.user.email],
        fone:[this.user.fone],
        cpf:[this.user.cpf],
        birthDate:[this.user.birthDate],
        changeDate:[''],
        motherName:[this.user.motherName],
        isActive:[true]
      });
  }
  setFormData(user :any ){
    //this.formUserUpdate.get('name').setValue(this.user.name);
  }
}
