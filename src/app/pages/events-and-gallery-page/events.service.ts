import { Injectable } from "@angular/core";
import * as categoryConstants from "./category.constants";
import { Event } from "./event";

@Injectable({
  providedIn: "root",
})
export class EventsService {
  eventsList: Event[];
  coCurricularEventsList: Event[];
  sportsEventsList: Event[];
  mediaEventsList: Event[];
  schoolGalleryList: Event[];

  constructor() {}

  intialiseEventsList() {
    // containing 9 objects currently
    this.eventsList = [
      {
        title: "Lorem ipsum",
        description:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "January 12, 2020",
        category: categoryConstants.CO_CURRICULAR_EVENTS,
        eventImage: "/assets/img/kids_library.jpg",
        imageList: [
          "/assets/img/kids_library.jpg",
          "/assets/img/kids_library.jpg",
          "/assets/img/kids_library.jpg",
        ],
        videoList: [],
      },
      {
        title: "Lorem ipsum",
        description:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "January 24, 2020",
        category: categoryConstants.SPORTS,
        eventImage: "/assets/img/kids_library.jpg",
        imageList: [
          "/assets/img/kids_library.jpg",
          "/assets/img/kids-books.png",
          "/assets/img/kids_library.jpg",
        ],
        videoList: [],
      },
      {
        title: "Lorem ipsum",
        description:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "September 12, 2020",
        category: categoryConstants.MEDIA_COVERAGE,
        eventImage: "/assets/img/kids_library.jpg",
        imageList: [
          "/assets/img/kids_library.jpg",
          "/assets/img/kids_library.jpg",
          "/assets/img/kids_library.jpg",
        ],
        videoList: [],
      },
      {
        title: "Lorem ipsum",
        description:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "July 12, 2020",
        category: categoryConstants.SCHOOL_GALLERY,
        eventImage: "/assets/img/kids_library.jpg",
        imageList: [
          "/assets/img/kids_library.jpg",
          "/assets/img/kids_library.jpg",
          "/assets/img/kids_library.jpg",
        ],
        videoList: [],
      },
      {
        title: "Blah Blah",
        description:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "June 12, 2020",
        category: categoryConstants.CO_CURRICULAR_EVENTS,
        eventImage: "/assets/img/kids_library.jpg",
        imageList: [
          "/assets/img/kids_library.jpg",
          "/assets/img/kids_library.jpg",
          "/assets/img/kids_library.jpg",
        ],
        videoList: [],
      },
      {
        title: "Lorem ipsum",
        description:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "September 12, 2019",
        category: categoryConstants.SPORTS,
        eventImage: "/assets/img/kids_library.jpg",
        imageList: [
          "/assets/img/kids_library.jpg",
          "/assets/img/kids-books.png",
          "/assets/img/kids_library.jpg",
        ],
        videoList: [],
      },
      {
        title: "Lorem ipsum",
        description:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "January 12, 2020",
        category: categoryConstants.MEDIA_COVERAGE,
        eventImage: "/assets/img/kids_library.jpg",
        imageList: [
          "/assets/img/kids_library.jpg",
          "/assets/img/kids_library.jpg",
          "/assets/img/kids_library.jpg",
        ],
        videoList: [],
      },
      {
        title: "Lorem ipsum",
        description:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "January 12, 2020",
        category: categoryConstants.SCHOOL_GALLERY,
        eventImage: "/assets/img/kids_library.jpg",
        imageList: [
          "/assets/img/kids_yoga.jpg",
          "/assets/img/kids_yoga.jpg",
          "/assets/img/kids_library.jpg",
        ],
        videoList: [],
      },
      {
        title: "Lorem ipsum",
        description:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "January 12, 2020",
        category: categoryConstants.CO_CURRICULAR_EVENTS,
        eventImage: "/assets/img/kids_library.jpg",
        imageList: [
          "/assets/img/kids_library.jpg",
          "/assets/img/kids-books.png",
          "/assets/img/kids_library.jpg",
        ],
        videoList: [],
      },
    ];

    this.coCurricularEventsList = this.filterCoCurricular();
    this.sportsEventsList = this.filterSports();
    this.mediaEventsList = this.filterMediaCoverage();
    this.schoolGalleryList = this.filterSchoolGallery();

    // debugger;
  }

  filterCoCurricular() {
    return this.eventsList.filter(
      (obj) => obj.category == categoryConstants.CO_CURRICULAR_EVENTS
    );
  }

  filterSports() {
    return this.eventsList.filter(
      (obj) => obj.category == categoryConstants.SPORTS
    );
  }

  filterMediaCoverage() {
    return this.eventsList.filter(
      (obj) => obj.category == categoryConstants.MEDIA_COVERAGE
    );
  }

  filterSchoolGallery() {
    return this.eventsList.filter(
      (obj) => obj.category == categoryConstants.SCHOOL_GALLERY
    );
  }
}
