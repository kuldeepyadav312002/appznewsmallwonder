import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {OverlayComponent} from "../../../components/overlay/overlay.component";

@Component({
  selector: 'app-activity-display',
  templateUrl: './activity-display.component.html',
  styleUrls: ['./activity-display.component.scss'],
})
export class ActivityDisplayComponent implements OnInit, OnChanges {
  // https://stackoverflow.com/a/44686085
  // How to detect when an input value changes in angular component
  @Input() activityName: string;

  ngOnChanges(changes: SimpleChanges) {
    this.updateImagesForActivity(changes.activityName.currentValue);
  }

  imageListInCarousel = [
    '/assets/img/kids_race.jpg',
    '/assets/img/kids_yoga.jpg',];
  @ViewChild(OverlayComponent, {static: false})
  imageModalRef: OverlayComponent;

  activityImageList = [
    '/assets/img/kids_race.jpg',
    '/assets/img/kids_stage.jpg',
    '/assets/img/kids_yoga.jpg',
  ];
  curriculumImageList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
  ];
  coCurricularImageList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
  ];
  stageExposureImageList = [
    1, 2, 3, 4, 5
  ];
  discoveryImageList = [
    1, 2, 3, 4, 5
  ];
  sportsImageList = [
    1, 2, 3, 4, 5, 6, 7
  ];
  clubsImageList = [
    1, 2, 3, 4, 5, 6
  ];
  activityMap = new Map([
    ['curriculum', this.curriculumImageList],
    ['co-curricular', this.coCurricularImageList],
    ['stage-exposure', this.stageExposureImageList],
    ['discovery', this.discoveryImageList],
    ['sports', this.sportsImageList],
    ['clubs', this.clubsImageList]
  ]);


  slideConfig = {
    slidesToShow: 1,
    nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    dots: true,
    infinite: true,
    centerMode: true,
  };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      let activityName = this.activityName;
      if (params.has('name')) {
        activityName = params.get('name');
      }
      this.updateImagesForActivity(activityName);
    });
  }

  private updateImagesForActivity(activityName: string) {
    const imageList = this.activityMap.get(activityName).map(
      name => '/assets/img/activities/' + activityName + '/' + name + '.jpg'
    );
    this.activityImageList = imageList;
    this.imageListInCarousel = imageList;
  }

  slickInit(e) {
    console.log('slick initialized in Activity Display Component');
  }
}
