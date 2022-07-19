import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersServiceService } from '../users-service.service';
import {Router} from '@angular/router';
import * as XLSX from 'xlsx';
import {jsPDF} from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-users-list-component',
  templateUrl: './users-list-component.component.html',
  styleUrls: ['./users-list-component.component.css']
})
export class UsersListComponentComponent implements OnInit {

  usersList$: any =[] ;
  showModalEdit = false;
  fileName= 'ExcelSheet.xlsx';
  nameFilterText: string = '';

  title='pagination';
  POSTS:any;
  page:number= 1;
  count:number=0;
  tableSize:number=10;
  tableSizes:any = [5,10,15,20];

  constructor(private service : UsersServiceService) { }

  ngOnInit() : void {
    this.getList();
  }

  getList(){
    this.service.getUsers().subscribe((res:any) => {
      this.usersList$ = res.collections
    });
  }
  modalTitle = '';
  activateUserRegisterComponent:boolean = false;
  user:any;

  modalAddUser(){
    this.modalTitle = 'Novo usuário';
    this.activateUserRegisterComponent = true;
  }

  modalEditUser(item:any){
    this.showModalEdit = true;
    this.user = item;
    this.modalTitle = 'Editar usuário';
    this.activateUserRegisterComponent = true;
  }

  desactivateUser(item:any){
    console.log('entrou', item.id)
    this.service.deleteUser(item).subscribe((res:any) => {
      console.log('res',res)
    })
  }

  exportexcel(): void
    {
      let element = document.getElementById('users-table');
      const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      XLSX.writeFile(wb, this.fileName);
    }
    @ViewChild('content') content: any;
    public SavePDF():void{
      let DATA: any = document.getElementById('users-table');
      html2canvas(DATA).then((canvas) => {
        let fileWidth = 208;
        let fileHeight = (canvas.height * fileWidth) / canvas.width;
        const FILEURI = canvas.toDataURL('image/png');
        let PDF = new jsPDF('p', 'mm', 'a4');
        let position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
        PDF.save('angular-demo.pdf');
      })
    }
    onTableDataChange(event:any){
      this.page = event;
      this.getList();
    }

    onTableSizeChange(event:any):void{
      this.tableSize = event.target.value;
      this.page = 1;
      this.getList();
    }
}
