import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})
export class SafePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  

  transform(urls: string[]): SafeResourceUrl[] {
    return urls.map(
      (url, i, a) => {
        const safeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
        return safeResourceUrl;
      });
  }

}
