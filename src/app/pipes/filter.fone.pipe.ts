import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
  name: 'foneFilter'
})
export class FilterFonePipe implements PipeTransform{
  transform(value: Array<any>, foneFilterText: string):any {
    if(foneFilterText){
      foneFilterText = foneFilterText.toUpperCase();
      return value.filter(a => a.fone.toUpperCase().indexOf(foneFilterText)>=0);
    }
    else{
      return value;
    }
  }
}
