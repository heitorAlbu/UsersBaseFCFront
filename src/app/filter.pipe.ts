import { Pipe, PipeTransform } from "@angular/core";
import { UsersListComponentComponent } from "./users-list-component/users-list-component.component";
@Pipe({
  name: 'userFilter'
})
export class FilterPipe implements PipeTransform{
  transform(value: Array<any>, nameFilterText: string):any {
    if(nameFilterText){
      nameFilterText = nameFilterText.toUpperCase();
      return value.filter(a => a.name.toUpperCase().indexOf(nameFilterText)>=0);
    }
    else{
      return value;
    }
  }
}
