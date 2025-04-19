

import { Component, HostListener, Input, OnInit, ElementRef } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  contactButtonText: string = "Call Us Today! (+91 7027401201)";
  @Input() currentUrl: string;
  classList: DOMTokenList | null = null; // Define classList type
  isDivHidden: boolean = false;
  constructor(public router: Router, private eRef: ElementRef) {}

  ngOnInit() {
    // Initialization logic
  }

  hideDiv(): void {
    const element = document.querySelector('.navbar-collapse') as HTMLElement;
    if (element) {
      this.classList = element.classList;
      this.classList.add('hidden-menu');
    }
    this.isDivHidden = true;
    document.body.classList.remove('body-overflow');
  }

  showdiv(): void {
    const element = document.querySelector('.navbar-collapse') as HTMLElement;
    if (element) {
      this.classList = element.classList;
      this.classList.remove('hidden-menu');
    }
    this.isDivHidden = false;
    document.body.classList.add('body-overflow');
  }

  onClickNav(): void {
    this.isDivHidden = true;
    document.body.classList.remove('body-overflow');
  }

  @HostListener("document:click", ["$event"])
  handleOutsideClick(event: Event): void {
    // Close the menu if the click is outside the menu element
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.isDivHidden = true;
      document.body.classList.remove('body-overflow');
    }
  }

  navigateToHome(): void {
    this.router.navigate(["/"]);
  }

  navigateToContact(): void {
    this.router.navigate(["/contact-form"]);
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 20) {
       let element = document.getElementById('header-container');
       element.classList.add('sticky');
     } else {
      let element = document.getElementById('header-container');
        element.classList.remove('sticky');
     }
  }
}
