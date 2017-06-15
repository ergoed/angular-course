import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from '../products/product-list/product-list.component';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }






}
