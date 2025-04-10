import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) {
  }

  getVideos(lat: any, lng: any) {
    const url = 'https://content.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&q=surfing&key=AIzaSyD-a9IF8KKYgoC3cpgS-Al7hLQDbugrDcw';
    return this.http.get(url);
  }
}
