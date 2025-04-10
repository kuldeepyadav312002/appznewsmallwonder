import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';
import { SafePipe } from './pipe/safe.pipe';
import { VideoComponent } from './components/video/video.component';
import { AdmissionInputFormComponent } from './pages/admissions-page/admission-input-form/admission-input-form.component';
import { ExploreSectionComponent } from './pages/activities-page/explore-section/explore-section.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { LearningBlockComponent } from './pages/curriculum-page/learning-block/learning-block.component';
import { LearningIntroComponent } from './pages/books-and-beyond-page/learning-intro/learning-intro.component';
import { LearningEnvSectionComponent } from './pages/books-and-beyond-page/learning-env-section/learning-env-section.component';
import { AdmissionStepComponent } from './pages/admissions-page/admission-step/admission-step.component';
import { LocationExploreComponent } from './pages/schedule-tour-page/location-explore/location-explore.component';
import { ActivityDisplayComponent } from './pages/activities-page/activity-display/activity-display.component';
import { ActivitiesListComponent } from './pages/activities-page/activities-list/activities-list.component';
import { CornerStoreComponent } from './pages/activities-page/corner-store/corner-store.component';
import { ActivitiesPageComponent } from './pages/activities-page/activities-page.component';
import { InputFormComponent } from './pages/franchise-page/input-form/input-form.component';
import { BackgroundImgTextComponent } from './components/background-img-text/background-img-text.component';
import { TextInfoBlockFullComponent } from './components/text-info-block-full/text-info-block-full.component';
import { RightAlignedImageComponent } from './pages/curriculum-page/right-aligned-image/right-aligned-image.component';
import { LeftAlignedImageComponent } from './pages/curriculum-page/left-aligned-image/left-aligned-image.component';
import { ParentsTestimonialComponent } from './pages/home-page/parents-testimonial/parents-testimonial.component';
import { SchoolAgeBreakComponent } from './pages/home-page/school-age-break/school-age-break.component';
import { FranchiseOpportunityComponent } from './pages/home-page/franchise-opportunity/franchise-opportunity.component';
import { ContactFormComponent } from './pages/contact-form/contact-form.component';
import { CarouselInfoCardEventComponent } from './components/carousel-info-card-event/carousel-info-card-event.component';
import { BranchInfoSectionComponent } from './pages/home-page/branch-info-section/branch-info-section.component';
import { PageBreakSectionComponent } from './pages/home-page/page-break-section/page-break-section.component';
import { CarouselInfoCardComponent } from './components/carousel-info-card/carousel-info-card.component';
import { HomeCurriculumSectionComponent } from './pages/home-page/home-curriculum-section/home-curriculum-section.component';
import { HomeIntroSectionComponent } from './pages/home-page/home-intro-section/home-intro-section.component';
import { ImageIntroCardComponent } from './components/image-intro-card/image-intro-card.component';
import { ImageRightTextInfoBlockComponent } from './components/image-right-text-info-block/image-right-text-info-block.component';
import { ImageTextInfoBlockComponent } from './components/image-text-info-block/image-text-info-block.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TextInfoBlockComponent } from './components/text-info-block/text-info-block.component';
import { MoreToExploreComponent } from './components/more-to-explore/more-to-explore.component';
import { ExtrasComponent } from './pages/about-us-page/extras/extras.component';
import { LeadershipComponent } from './pages/about-us-page/leadership/leadership.component';
import { HistoryComponent } from './pages/about-us-page/history/history.component';
import { AboutUSComponent } from './pages/about-us-page/about-us/about-us.component';
import { ShoonyaPageComponent } from './pages/shoonya-page/shoonya-page.component';
import { ScheduleTourPageComponent } from './pages/schedule-tour-page/schedule-tour-page.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { BooksAndBeyondPageComponent } from './pages/books-and-beyond-page/books-and-beyond-page.component';
import { EventsAndGalleryPageComponent } from './pages/events-and-gallery-page/events-and-gallery-page.component';
import { FranchisePageComponent } from './pages/franchise-page/franchise-page.component';
import { AdmissionsPageComponent } from './pages/admissions-page/admissions-page.component';
import { CurriculumPageComponent } from './pages/curriculum-page/curriculum-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ImageCardTextComponent } from './components/image-card-text/image-card-text.component';
import { ImageCardSectionComponent } from './components/image-card-section/image-card-section.component';
import { ImageSectionComponent } from './components/image-section/image-section.component';
import { CarouselImageSectionComponent } from './components/carousel-image-section/carousel-image-section.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { BannerComponent } from './components/banner/banner.component';
import { RecentEventsComponent } from './components/recent-events/recent-events.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { BlogDetailsComponent } from './pages/blog-page/blog-details/blog-details.component';
import { OurHistoryComponent } from './our-history/our-history.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    CarouselImageSectionComponent,
    ImageSectionComponent,
    ImageCardSectionComponent,
    ImageCardTextComponent,
    AboutUsPageComponent,
    CurriculumPageComponent,
    AdmissionsPageComponent,
    FranchisePageComponent,
    EventsAndGalleryPageComponent,
    BooksAndBeyondPageComponent,
    BlogPageComponent,
    ScheduleTourPageComponent,
    ShoonyaPageComponent,
    AboutUSComponent,
    HistoryComponent,
    LeadershipComponent,
    ExtrasComponent,
    MoreToExploreComponent,
    TextInfoBlockComponent,
    AccordionComponent,
    ImageTextInfoBlockComponent,
    ImageRightTextInfoBlockComponent,
    ImageIntroCardComponent,
    HomeIntroSectionComponent,
    HomeCurriculumSectionComponent,
    CarouselInfoCardComponent,
    PageBreakSectionComponent,
    BranchInfoSectionComponent,
    CarouselInfoCardEventComponent,
    ContactFormComponent,
    FranchiseOpportunityComponent,
    SchoolAgeBreakComponent,
    ParentsTestimonialComponent,
    LeftAlignedImageComponent,
    RightAlignedImageComponent,
    TextInfoBlockFullComponent,
    BackgroundImgTextComponent,
    InputFormComponent,
    ActivitiesPageComponent,
    CornerStoreComponent,
    ActivitiesListComponent,
    ActivityDisplayComponent,
    LocationExploreComponent,
    AdmissionStepComponent,
    LearningEnvSectionComponent,
    LearningIntroComponent,
    LearningBlockComponent,
    OverlayComponent,
    ExploreSectionComponent,
    AdmissionInputFormComponent,
    VideoComponent,
    SafePipe,
    JumbotronComponent,
    BannerComponent,
    RecentEventsComponent,
    GalleryComponent,
    BlogDetailsComponent,
    OurHistoryComponent,
    TestimonialPageComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxUsefulSwiperModule,
    NgbModule,
    SlickCarouselModule, 
    HttpClientModule,
     EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
