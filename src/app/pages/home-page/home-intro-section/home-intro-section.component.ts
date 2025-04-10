import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'slick-carousel';


@Component({
  selector: 'app-home-intro-section',
  templateUrl: './home-intro-section.component.html',
  styleUrls: ['./home-intro-section.component.scss']
})
export class HomeIntroSectionComponent implements OnInit {

  // $('.slider-for').slick({
  slideConfig_for = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    centerMode: true,
    asNavFor: '.slider-nav',
    // responsive: [
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       centerMode: false,
    //       slidesToShow: 2,
    //     }
    //   },
    // ]
  }
  slideConfig_nav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
  };

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: "<div class='nav-btn next-slide'></div>",
    prevArrow: "<div class='nav-btn prev-slide'></div>",
  };

  branchList = [
    {
      imgSrc: "/assets/img/homepagep2.JPG",
      title: "Our Philosophy",
      id: "new1"
    },
    {
      imgSrc: "/assets/img/meet2.png",
      title: "Meet Our Team",
      id: "new2"
    },
    {
      imgSrc: "/assets/img/homepage10.png",
      title: "Admissions",
      id: "new1"

    },
    {
      imgSrc: "/assets/img/philosophy.png",
      title: "Our Pedagogy",
      id: "new1"
    },
  ];
    slideConfig_for_single = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: false,
      centerMode: true,
      asNavFor: '.slider-nav'
    }
    slideConfig_nav_single = {
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: "",
      prevArrow: "",
      asNavFor: '.slider-for-new',
      autoplay: true,
      autoplaySpeed: 3000,
    };

    slideConfig_single = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: "",
      prevArrow: "",
    };

    branchList_single = [
      {
        imgSrc: "/assets/img/hug1.png",
        title: "Boy 1",
        id: "boy1"
      },
      {
        imgSrc: "/assets/img/runnn1.png",
        title: "Boy 2",
        id: "new2"
      },
      
    ];
  /*single image slider*/

  constructor() { }

  ngOnInit() {
  }

  afterChange(e) {
    // debugger;
  }
  clickedImageUrl: string | null = "assets/img/history.png";
  ImageClick(getvalest) {
    this.clickedImageUrl = getvalest;
  }

  // $(document).ready(() => {
  //   // Initialize the Slick Carousel
  //   $('.slider').slick({
  //     vertical: true,
  //     autoplay: true,
  //     autoplaySpeed: 3000,
  //     speed: 300,
  //   });
  // });



}
