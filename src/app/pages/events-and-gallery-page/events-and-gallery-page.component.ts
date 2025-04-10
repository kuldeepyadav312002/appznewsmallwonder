import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { EventsService } from "./events.service";
import { ActivatedRoute, Router } from "@angular/router";
import * as categoryConstants from "./category.constants";
import { OverlayComponent } from "../../components/overlay/overlay.component";

@Component({
  selector: "app-events-and-gallery-page",
  templateUrl: "./events-and-gallery-page.component.html",
  styleUrls: ["./events-and-gallery-page.component.scss"],
})
export class EventsAndGalleryPageComponent implements OnInit {
  title = "Events & Gallery";
  category: string = "";
  eventsList = [];

  imageListInCarousel = [];
  @ViewChild(OverlayComponent, { static: false })
  imageModalRef: OverlayComponent;

  constructor(
    private eventsService: EventsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.navigate(["/events-and-gallery"], {
      queryParams: { type: "all" },
    });
    this.eventsService.intialiseEventsList();
    this.route.queryParams.subscribe((params) => {
      this.category = params["type"];
      this.displayEvents(this.category);
    });
  }

  displayEvents(category: string) {
    console.log("category: ", category);
    switch (category) {
      case categoryConstants.CO_CURRICULAR_EVENTS:
        this.eventsList = this.eventsService.coCurricularEventsList;
        break;

      case categoryConstants.SPORTS:
        this.eventsList = this.eventsService.sportsEventsList;
        break;

      case categoryConstants.MEDIA_COVERAGE:
        this.eventsList = this.eventsService.mediaEventsList;
        break;

      case categoryConstants.SCHOOL_GALLERY:
        this.eventsList = this.eventsService.schoolGalleryList;
        break;

      default:
        this.eventsList = this.eventsService.eventsList;
        break;
    }
    // console.log(this.eventsList);
  }

  openModal(images) {
    this.imageListInCarousel = [];
    if (images.length == 0) {
      return;
    }
    this.imageListInCarousel = images;
    this.imageModalRef.showModal();
  }
}
