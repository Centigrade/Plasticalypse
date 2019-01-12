import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'icon',
})
export class IconPipe implements PipeTransform {
  transform(value: any, state?: 'active' | 'normal', type?: 'svg' | 'png'): any {
    let url = '';

    const statePrefix = state === 'active' ? '.active' : '';

    if (type) {
      url = `url(assets/icon/${type}/${value}${statePrefix}.${type})`;
    } else {
      url = `url(assets/icon/${value}${statePrefix}.png)`;
    }

    return url;
  }
}
