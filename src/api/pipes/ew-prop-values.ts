import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ewPropValues' })
export class EwPropValues implements PipeTransform {
  transform(value: any, args?: any[]): any[] {
    console.log('pipe',value)
    if (value) {
      return Object.keys(value[0])
        .map((key) => {
          return value[0][key];
        });
    }

    return [];
  }
}
