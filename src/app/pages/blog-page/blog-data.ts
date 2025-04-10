export class Blog {
  title: string;
  description: string;
  date: string;
  category: string;
  blogImage: any;
  imageList = [];
  videoList = [];

  constructor(obj) {
    this.title = obj.title;
    this.description = obj.description;
    this.date = obj.date;
    this.category = obj.category;
    this.blogImage = obj.blogImage;
    this.imageList = obj.imageList;
    this.videoList = obj.videoList;
  }
}
