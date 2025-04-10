import { Injectable } from "@angular/core";
import * as blogCategoryConstants from "./blog-category.constants";
import { Blog } from "./blog-data";

@Injectable({
  providedIn: "root",
})
export class BlogsService {
  blogsList: Blog[];
  facultyBlogsList: Blog[];
  studentBlogsList: Blog[];
  podcastsBlogsList: Blog[];
  pressBlogsList: Blog[];

  constructor() {}

  intialiseEventsList() {
    // containing 9 objects currently
    this.blogsList = [
      {
        title: "Lorem ipsum",
        description:
          "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        date: "January 12, 2020",
        category: blogCategoryConstants.FACULTY,
        blogImage: "/assets/img/kids_library.jpg",
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
        category: blogCategoryConstants.STUDENTS,
        blogImage: "/assets/img/kids_library.jpg",
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
        category: blogCategoryConstants.PODCASTS,
        blogImage: "/assets/img/kids_library.jpg",
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
        category: blogCategoryConstants.PRESS,
        blogImage: "/assets/img/kids_library.jpg",
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
        category: blogCategoryConstants.FACULTY,
        blogImage: "/assets/img/kids_library.jpg",
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
        category: blogCategoryConstants.STUDENTS,
        blogImage: "/assets/img/kids_library.jpg",
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
        category: blogCategoryConstants.PODCASTS,
        blogImage: "/assets/img/kids_library.jpg",
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
        category: blogCategoryConstants.PRESS,
        blogImage: "/assets/img/kids_library.jpg",
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
        category: blogCategoryConstants.FACULTY,
        blogImage: "/assets/img/kids_library.jpg",
        imageList: [
          "/assets/img/kids_library.jpg",
          "/assets/img/kids-books.png",
          "/assets/img/kids_library.jpg",
        ],
        videoList: [],
      },
    ];

    this.facultyBlogsList = this.filterFaculty();
    this.studentBlogsList = this.filterStudents();
    this.podcastsBlogsList = this.filterPodcasts();
    this.pressBlogsList = this.filterPress();

    // debugger;
  }

  filterFaculty() {
    return this.blogsList.filter(
      (obj) => obj.category == blogCategoryConstants.FACULTY
    );
  }

  filterStudents() {
    return this.blogsList.filter(
      (obj) => obj.category == blogCategoryConstants.STUDENTS
    );
  }

  filterPodcasts() {
    return this.blogsList.filter(
      (obj) => obj.category == blogCategoryConstants.PODCASTS
    );
  }

  filterPress() {
    return this.blogsList.filter(
      (obj) => obj.category == blogCategoryConstants.PRESS
    );
  }
}
