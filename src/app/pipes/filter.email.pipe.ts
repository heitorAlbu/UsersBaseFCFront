import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'emailFilter'
})
export class FilterEmailPipe implements PipeTransform{
  transform(value: Array<any>, emailFilterText: string):any {
    if(emailFilterText){
      emailFilterText = emailFilterText.toUpperCase();
      return value.filter(a => a.email.toUpperCase().indexOf(emailFilterText)>=0);
    }
    else{
      return value;
    }
  }
}
