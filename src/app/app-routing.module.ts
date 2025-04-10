import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { AboutUSComponent } from './pages/about-us-page/about-us/about-us.component';
import { ExtrasComponent } from './pages/about-us-page/extras/extras.component';
import { HistoryComponent } from './pages/about-us-page/history/history.component';
import { LeadershipComponent } from './pages/about-us-page/leadership/leadership.component';
import { ActivitiesListComponent } from './pages/activities-page/activities-list/activities-list.component';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';
import { ActivityDisplayComponent } from './pages/activities-page/activity-display/activity-display.component';
import { AdmissionsPageComponent } from './pages/admissions-page/admissions-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BooksAndBeyondPageComponent } from './pages/books-and-beyond-page/books-and-beyond-page.component';
import { CurriculumPageComponent } from './pages/curriculum-page/curriculum-page.component';
import { EventsAndGalleryPageComponent } from './pages/events-and-gallery-page/events-and-gallery-page.component';
import { FranchisePageComponent } from './pages/franchise-page/franchise-page.component';
import { ContactFormComponent } from './pages/home-page/contact-form/contact-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ParentsTestimonialComponent } from './pages/home-page/parents-testimonial/parents-testimonial.component';
import { ScheduleTourPageComponent } from './pages/schedule-tour-page/schedule-tour-page.component';
import { ShoonyaPageComponent } from './pages/shoonya-page/shoonya-page.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BlogDetailsComponent } from './pages/blog-page/blog-details/blog-details.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  {
    path: "about-us",
    component: AboutUsPageComponent
  },
  { path: "curriculum", component: CurriculumPageComponent },
  { path: "admissions", component: AdmissionsPageComponent },
  { path: "franchise", component: FranchisePageComponent },
  {
    path: "activities",
    component: ActivitiesPageComponent
  },
  {
    path: "events-and-gallery",
    component: EventsAndGalleryPageComponent,
  },
  { path: "books-and-beyond", component: BooksAndBeyondPageComponent },
  { path: "blog", component: BlogPageComponent },
  { path: "schedule-tour", component: ScheduleTourPageComponent },
  { path: "shoonya", component: ShoonyaPageComponent },
  { path: "contact-form", component: ContactFormComponent },
  { path: "parents-testimonial", component: ParentsTestimonialComponent },
  { path: "our-blog", component: BlogPageComponent },
  { path: "our-gallery", component: GalleryComponent },
  { path: "our-blog-detais", component: BlogDetailsComponent},
  { path: "our-history", component: OurHistoryComponent},
  { path: "testimonial", component: TestimonialPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
