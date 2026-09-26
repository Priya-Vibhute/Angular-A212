import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})

// {{ "Nisha" | welcome: }}
export class WelcomePipe implements PipeTransform {

  transform(value: string, ...args: number[]): string {
    let total= args[0]+args[1]-args[2]
    return "Good Morning "+value+" , welcome to xyz company, Salary :"+total;
  }

}
