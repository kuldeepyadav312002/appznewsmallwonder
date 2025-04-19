import { Component, OnInit,ElementRef,AfterViewInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-branch-info-section",
  templateUrl: "./branch-info-section.component.html",
  styleUrls: ["./branch-info-section.component.scss"],
})
export class BranchInfoSectionComponent implements OnInit {

  constructor(private router: Router,private elRef: ElementRef) {}
  public branchTitle="It’s fun to be here";
  public branchHeading="Our Branches";



  ngOnInit() {

    setInterval(() => {
      const elementCurrent = this.elRef.nativeElement.querySelector('.slick-active');
   let slickAttribute= elementCurrent.getAttribute('data-slick-index');
   let index=Number(slickAttribute)-1;
   let indexPlus=Number(slickAttribute)+1;
   const elementSlide = this.elRef.nativeElement.querySelector(`[data-slick-index="${index}"]`);
   const elementPlus = this.elRef.nativeElement.querySelector(`[data-slick-index="${indexPlus}"]`);
  //  elementSlide.style.marginRight="-10px";
   elementSlide.style.position="relative";
    // elementPlus.style.marginLeft="-10px";
    elementPlus.style.position="relative";

    }, 1000);

  }

  navigateToContact() {
    this.router.navigate(["/schedule-tour"]);
  }

  branchList = [
    {
      imgSrc: "../../../../assets/img/students/left.png",
      title: "Small Wonders Kindergarten",
      address: "L-301, model town, panipat",
      subText: "Know More",
      showArrow: "true",
      color: "#10112E",
    },
    {
      imgSrc: "../../../../assets/img/students/front.png",
      title: "Small Wonders World School",
      address: "B block tdi city sector 39, panipat",
      subText: "Know More",
      showArrow: "true",
      color: "#B4874C",
    },
    {
      imgSrc: "../../../../assets/img/students/right.png",
      title: "Small Wonders Ikigai",
      address: "Yamuna Enclave",
      subText: "Know More",
      showArrow: "",
      color: "#772234",
    },

    {
      imgSrc: "../../../../assets/img/students/left.png",
      title: "Small Wonders Kindergarten",
      address: "L-301, model town, panipat",
      subText: "Know More",
      showArrow: "true",
      color: "#10112E",
    },
    {
      imgSrc: "../../../../assets/img/students/front.png",
      title: "Small Wonders World School",
      address: "B block tdi city sector 39, panipat",
      subText: "Know More",
      showArrow: "true",
      color: "#B4874C",
    },
    {
      imgSrc: "../../../../assets/img/students/right.png",
      title: "Small Wonders Ikigai",
      address: "Yamuna Enclave",
      subText: "Know More",
      showArrow: "",
      color: "#772234",
    }



    
  ];

  // $('.slider-for').slick({
    slideConfig_for_desktop = {
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: false,
      centerMode: true,
      // asNavFor: '.slider-nav'
    }
    // });
    //   $('.slider-nav').slick({
    slideConfig_nav_desktop = {
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: "",
      prevArrow: "",
      asNavFor: '.slider-for',
      autoplay: true,
      autoplaySpeed: 3000,

      // centerMode: true,
      // focusOnSelect: true
    };

    slideConfig_desktop = {
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: "",
      prevArrow: "",
      // centerMode: true,
    };

    branchList_desktop = [
      {
        imgSrcImg: "../../../../assets/img/students/left.png",
        title: "Small Wonders Kindergarten",
        address: "L-301, model town, panipat",
        subText: "Know More",
        showArrow: "true",
        classnamevl: "one"
      },
      {
        imgSrcImg: "../../../../assets/img/students/front.png",
        title: "Small Wonders World School",
        address: "B block tdi city sector 39, panipat",
        subText: "Know More",
        showArrow: "true",
        classnamevl: "two",
        color: "red"
      },
      {
        imgSrcImg: "../../../../assets/img/students/right.png",
        title: "Small Wonders Ikigai",
        address: "Yamuna Enclave",
        subText: "Know More",
        showArrow: "",
        classnamevl: "three",
        color: "green"
      },
    ];

  afterChange(e) {
    // debugger;
  }





  slickInit(e) {
    console.log("slick initialized");
  }

  isCard1Larger: boolean = false;
  isCard2Larger: boolean = true;
  isCard3Larger: boolean = false;

  enlargeCard(cardId: number) {
    this.isCard1Larger = cardId === 1;
    this.isCard2Larger = cardId === 2;
    this.isCard3Larger = cardId === 3;
  }

  enlargeCard1() {
    this.isCard1Larger = true;
    this.isCard2Larger = false;
    this.isCard3Larger = false;
  }

  enlargeCard2() {
    this.isCard1Larger = false;
    this.isCard2Larger = true;
    this.isCard3Larger = false;
  }

  enlargeCard3() {
    this.isCard1Larger = false;
    this.isCard2Larger = false;
    this.isCard3Larger = true;
  }

  originalSize() {
    this.isCard1Larger = false;
    this.isCard2Larger = true;
    this.isCard3Larger = false;
  }

  goToSchedulePage(){
    this.router.navigateByUrl('/schedule-tour');
  }



  // demo
  slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfig = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "arrows": true,
    "autoplay": false,
    "autoplaySpeed": 2000,
    "centerMode": true,
    "variableWidth": true,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: false,
          autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          padding: 20,
        }
      },
    ]

  };

  addSlide() {
    this.slides.push(488)
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }




  breakpoint(e: any) {
    console.log('breakpoint');
  }



  beforeChange(e: any) {


    console.log('beforeChange11');
  }

}
