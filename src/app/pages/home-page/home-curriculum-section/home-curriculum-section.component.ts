import { Component, OnInit, Input } from "@angular/core";
import { SwiperOptions } from 'swiper';

@Component({
  selector: "app-home-curriculum-section",
  templateUrl: "./home-curriculum-section.component.html",
  styleUrls: ["./home-curriculum-section.component.scss"],
})
export class HomeCurriculumSectionComponent implements OnInit {
  @Input() titleIntro = "";
  @Input() title = "";
  @Input() displayList = [];
  @Input() type = "";

  config: SwiperOptions = {
    // loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 18,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // pagination: { el: '.swiper-pagination', clickable: true },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
    // spaceBetween: 30
  };

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
    navigation:true,
    dots: true,
    autoplay: true,
    infinite: true,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1000, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  constructor() {}

  ngOnInit() {
    // debuggerimgSrc
  }

  slickInit(e) {
    console.log("slick initialized");
  }

  breakpoint(e) {
    console.log("breakpoint");
  }

  afterChange(e) {
    console.log("afterChange");
  }

  beforeChange(e) {
    console.log("beforeChange");
  }
}
