import {Pipe, PipeTransform} from '@angular/core'

@Pipe({
  name: 'virgula'
})
export class VirgulaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === undefined) {
      return '0,00'
    } else {
      let data = '' + value
      data = data.replace('.', ',');
      return  data.match(/,\d{1}$/g) ? data + '0' : data.match(/,\d{2}/g) ? data : data + ',00'

    }
  }

}
