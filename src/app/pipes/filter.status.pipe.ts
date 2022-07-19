import { Pipe, PipeTransform } from "@angular/core";
import { UsersListComponentComponent } from "../users-list-component/users-list-component.component";
@Pipe({
  name: 'statusFilter'
})
export class FilterStatusPipe implements PipeTransform{
  transform(value: Array<any>, statusFilterText: boolean):any {
    if(statusFilterText){
      statusFilterText = statusFilterText;
      return value.filter(a => a.isActive.indexOf(statusFilterText)>=0);
    }
    else{
      return value;
    }
  }
}
