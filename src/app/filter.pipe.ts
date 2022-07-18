import { Pipe, PipeTransform } from "@angular/core";
import { UsersListComponentComponent } from "./users-list-component/users-list-component.component";
@Pipe({
  name: 'userFilter'
})
export class FilterPipe implements PipeTransform{
  transform(usersList$: any[], nameFilterText: string) {
    if(usersList$.length === 0 || nameFilterText === ''){
      return usersList$;
    }else{
      return usersList$.filter((user) => {
        return user.name.toLowerCase() === nameFilterText.toLowerCase();
      })
    }
  }
}
