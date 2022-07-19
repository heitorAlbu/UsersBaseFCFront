import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'motherNameFilter'
})
export class FilterMotherNamePipe implements PipeTransform{
  transform(value: Array<any>, motherNameFilterText: string):any {
    if(motherNameFilterText){
      motherNameFilterText = motherNameFilterText.toUpperCase();
      return value.filter(a => a.motherName.toUpperCase().indexOf(motherNameFilterText)>=0);
    }
    else{
      return value;
    }
  }
}
