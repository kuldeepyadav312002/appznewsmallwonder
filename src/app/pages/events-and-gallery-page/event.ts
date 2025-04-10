export class Event {
  title: string;
  description: string;
  date: string;
  category: string;
  eventImage: any;
  imageList = [];
  videoList = [];

  constructor(obj) {
    this.title = obj.title;
    this.description = obj.description;
    this.date = obj.date;
    this.category = obj.category;
    this.eventImage = obj.eventImage;
    this.imageList = obj.imageList;
    this.videoList = obj.videoList;
  }
}
