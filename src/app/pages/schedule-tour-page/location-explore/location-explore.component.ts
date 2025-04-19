import { Component, OnInit, Input, ElementRef,AfterViewInit } from "@angular/core";

@Component({
  selector: "app-location-explore",
  templateUrl: "./location-explore.component.html",
  styleUrls: ["./location-explore.component.scss"],
})
export class LocationExploreComponent implements OnInit, AfterViewInit {
  constructor(private elRef: ElementRef) {}
  public branchTitle="";
  public branchHeading="";
  @Input() title: string = "";
  @Input() locationList = [];

  
  branchList = [
    {
      imgSrc: "../../../../assets/img/students/left.png",
      title: "Small Wonders Kindergarten",
      address: "L-301, model town, panipat",
      subText: "Know More",
      showArrow: "true",
      color: "#10112E",
      phone: "+91 9050417272",
      email: "smallwonders2002@gmail.com",
    },
    {
      imgSrc: "../../../../assets/img/students/front.png",
      title: "Small Wonders World School",
      address: "B block tdi city sector 39, panipat",
      subText: "Know More",
      showArrow: "true",
      phone: "+91 7027401201",
      email: "smallwonderstdi@gmail.com",
      color: "#B4874C",
    },
    {
      imgSrc: "../../../../assets/img/students/right.png",
      title: "Small Wonders Ikigai",
      address: "Yamuna Enclave",
      subText: "Know More",
      showArrow: "true",
      color: "#772234",
      phone: "+91 7027401210",
      email: "smallwonders2002@gmail.com",
    },

    {
      imgSrc: "../../../../assets/img/students/left.png",
      title: "Small Wonders Kindergarten",
      address: "L-301, model town, panipat",
      subText: "Know More",
      showArrow: "true",
      color: "#10112E",
      phone: "+91 9050417272",
      email: "smallwonders2002@gmail.com",
    },
    {
      imgSrc: "../../../../assets/img/students/front.png",
      title: "Small Wonders World School",
      address: "B block tdi city sector 39, panipat",
      subText: "Know More",
      showArrow: "true",
      color: "#B4874C",
      phone: "+91 7027401201",
      email: "smallwonderstdi@gmail.com",
    },
    {
      imgSrc: "../../../../assets/img/students/right.png",
      title: "Small Wonders Ikigai",
      address: "Yamuna Enclave",
      subText: "Know More",
      showArrow: "true",
      color: "#772234",
      phone: "+91 7027401210",
      email: "smallwonders2002@gmail.com",
    }



    
  ];




  ngAfterViewInit(): void {
    
  }

  ngOnInit() {
  
    
  }



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
      autoplay:true,
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
        phone: "+91 9050417272",
        email: "smallwonders2002@gmail.com",
        subText: "Know More",
        showArrow: "true",
        classnamevl: "one"
      },
      {
        imgSrcImg: "../../../../assets/img/students/front.png",
        title: "Small Wonders World School",
        address: "B block tdi city sector 39, panipat",
        
        phone: "+91 9050417272",
        email: "smallwonders2002@gmail.com",
        subText: "Know More",
        showArrow: "true",
        classnamevl: "two",
        color: "red"
      },
      {
        imgSrcImg: "../../../../assets/img/students/right.png",
        title: "Small Wonders Ikigai",
        address: "Yamuna Enclave",
        phone: "+91 9050417272",
        email: "smallwonders2002@gmail.com",
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





  // demo
  slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "arrows": true,
    "autoplay": true,
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
          slidesToShow: 3,
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
