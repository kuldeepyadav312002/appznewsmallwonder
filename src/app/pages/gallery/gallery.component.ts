import { Component, Input, OnInit } from '@angular/core';
import * as $ from 'jquery'; // Import jQuery and use its typings

interface Item {
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  image='../../../assets/image/Maskgroup.png'

  @Input() showCount= false


  constructor() { }

  galleryData: Item[] = [
    {
      imageSrc: '/assets/image/girl-book.jpg',
      imageAlt: '1'
    },
    {
      imageSrc: '/assets/image/about-5.png',
      imageAlt: '2'
    },
    {
      imageSrc: '/assets/image/about-8.png',
      imageAlt: '3'
    },
    {
      imageSrc: '/assets/image/aboutc1.png',
      imageAlt: '4'
    },
    {
      imageSrc: '/assets/image/aboutv2.JPG',
      imageAlt: '5'
    },
    {
      imageSrc: '/assets/image/admission-21.png',
      imageAlt: '6'
    },
    {
      imageSrc: '/assets/image/happy.png',
      imageAlt: '7'
    },
    {
      imageSrc: '/assets/image/Rectangle.png',
      imageAlt: '8'
    },
    {
      imageSrc: '/assets/image/Rectangle-2.png',
      imageAlt: '9'
    },
    {
      imageSrc: '/assets/image/Rectangle-3.png',
      imageAlt: '10'
    },
    
  ]

  previewImage: boolean=false;
  showMask:boolean= false;
  currentLightBoxImage: Item=this.galleryData[0]
  currentItem=0;
  controls: boolean= true; 
  totalImageCount=0;


  ngOnInit(): void {
    this.totalImageCount= this.galleryData.length;

    $(document).ready(function() {
      // Your jQuery code here
    });
  }

  onPreviewImage(index: number): void {
    this.showMask= true;
    // console.log(event);
    this.previewImage= true;
    this.currentItem= index
    this.currentLightBoxImage= this.galleryData[index]
    
  }
  closePreview(){
    this.previewImage= false
    this.showMask=false
  }

  next():void {
    this.currentItem= this.currentItem+1
    if(this.currentItem> this.galleryData.length - 1){
      this.currentItem=0
    }
    this.currentLightBoxImage=this.galleryData[this.currentItem]
  }
  prev():void {
    this.currentItem= this.currentItem-1
    if(this.currentItem< 0){
      this.currentItem= this.galleryData.length - 1
    }
    this.currentLightBoxImage=this.galleryData[this.currentItem]
  }

}
