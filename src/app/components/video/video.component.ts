import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {VideoService} from '../../services/video.service';
import {SafeResourceUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit, OnChanges {

  @Input() urls: SafeResourceUrl[];

  ngOnChanges(changes: SimpleChanges) {
    this.urls = changes.urls.currentValue;
  }

  constructor(private videoService: VideoService) {
  }

  ngOnInit() {
    // this.urls.push('https://www.youtube.com/embed/Ez2GeaMa4c8');
    // this.urls.push('https://www.youtube.com/embed/Ez2GeaMa4c8');
    // this.urls.push('https://www.youtube.com/embed/Ez2GeaMa4c8');
  }

}
