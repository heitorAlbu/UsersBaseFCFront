import { Component, Input, Output,EventEmitter ,OnInit } from '@angular/core';
import { UsersServiceService } from '../users-service.service';
import { FormBuilder,FormGroup,FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-users-update-component',
  templateUrl: './users-update-component.component.html',
  styleUrls: ['./users-update-component.component.css']
})
export class UsersUpdateComponentComponent implements OnInit {
  formUserUpdate: FormGroup;
  @Input() userItem : any;
  user:any;
  constructor(private service: UsersServiceService, private formBuilder:FormBuilder) {
    this.formUserUpdate = this.formBuilder.group({
      id :'',
      name:'',
      password:'',
      email:'',
      fone:'',
      cpf:'',
      birthDate:'',
      inclusionDate:'',
      motherName:'',
      isActive:''
    })

   }
   get f() {return this.formUserUpdate.controls;}
  ngOnInit():void {
    console.log('iniciou...');
    this.setUpdateData();
    console.log('this.user',this.user);
  }
  update(formUserUpdate :any ){
    this.service.addUser(formUserUpdate).subscribe((res:any) => {
      console.log('res',res)
      this.formUserUpdate.reset();
    })
  }

  setUpdateData() {
   this.user = {
    id : this.userItem.id,
    name:this.userItem.name,
    password:this.userItem.password,
    email:this.userItem.email,
    fone:this.userItem.fone,
    cpf:this.userItem.cpf,
    birthDate:this.userItem.birthDate,
    inclusionDate:this.userItem.inclusionDate,
    motherName:this.userItem.motherName,
    isActive:this.userItem.isActive
   }


    //this.user.name = this.formUserUpdate.get('name').setValue(this.user.name);

  }
}
