import { Pipe, PipeTransform } from "@angular/core";
import { UsersListComponentComponent } from "../users-list-component/users-list-component.component";
@Pipe({
  name: 'cpfFilter'
})
export class FilterCPFPipe implements PipeTransform{
  transform(value: Array<any>, cpfFilterText: string):any {
    if(cpfFilterText){
      cpfFilterText = cpfFilterText.toUpperCase();
      return value.filter(a => a.cpf.toUpperCase().indexOf(cpfFilterText)>=0);
    }
    else{
      return value;
    }
  }
}
