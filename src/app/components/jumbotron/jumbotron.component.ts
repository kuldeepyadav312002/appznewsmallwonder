import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {

  slides = [

    {img: "../../../assets/image/newimg/nslide21.png"},
    
    {img: "../../../assets/image/newimg/nlider13.png"},
    {img: "../../../assets/image/newimg/nslider22.png"},
    
    
    

  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  slickInit(e) {
    console.log('slick initialized');
  }
    
  breakpoint(e) {
    console.log('breakpoint');
  }
    
  afterChange(e) {
    console.log('afterChange');
  }
    
  beforeChange(e) {
    console.log('beforeChange');
  }

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": false,
    "infinite": true,
    "arrows": false,
    "autoplay": true,
    "autoplaySpeed": 4000,
    "responsive": [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          dots: false,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 600,
        settings: {
        }
      },
      {
        breakpoint: 480,
        settings: {

        }
      }
    ]
  };

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

}
