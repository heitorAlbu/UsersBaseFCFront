import { Pipe, PipeTransform } from "@angular/core";
import { UsersListComponentComponent } from "../users-list-component/users-list-component.component";
@Pipe({
  name: 'ageFilter'
})
export class FilterAgePipe implements PipeTransform{
  transform(value: Array<any>, ageFilterText: string):any {
    if(ageFilterText){
      if(ageFilterText === "1"){
        return value.filter(a => a.age >=18 && a.age <26);
      }else if(ageFilterText === "2"){
        return value.filter(a => a.age >=25 && a.age <31);
      }else if(ageFilterText === "3"){
        return value.filter(a => a.age >=30 && a.age <36);
      }else if(ageFilterText === "4"){
        return value.filter(a => a.age >=35 && a.age <41);
      }else if(ageFilterText === "5"){
        return value.filter(a => a.age >=41);
      }
    }
    else{
      return value;
    }
  }
}
