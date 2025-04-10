import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  // transform(url: string) {
  // transform(urls: any): any {
  //   if (urls instanceof Array) {
  //     alert('Array');
  //     return  urls.map(
  //       (url, i, a) => {
  //         alert('inside map = ' + url);
  //         const safeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  //         // alert('url =' + a[i]);
  //         alert(safeResourceUrl);
  //         return safeResourceUrl;
  //       });
  //   }
  //   alert('not Array or string' + urls);
  //   return this.sanitizer.bypassSecurityTrustResourceUrl(urls.toString());
  // }

  transform(urls: string[]): SafeResourceUrl[] {
    return urls.map(
      (url, i, a) => {
        const safeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        return safeResourceUrl;
      });
  }

}
