import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'small-wonder';
  currentRoute: any;
  constructor(private router:Router,private activateRoute:ActivatedRoute){
    this.router.events.subscribe(event=>{
      if(event instanceof NavigationEnd){
        // debugger
        this.currentRoute=this.getCurrentRoute(this.activateRoute);
        // debugger
      }
    })
  }

  getCurrentRoute(route:any){
    let currentRoute=route.root;
    while(currentRoute.children[0]!==undefined){
      currentRoute=currentRoute.children[0]
    }
    return currentRoute.snapshot.routeConfig['path']
  }

}
