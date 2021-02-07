import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
    // moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    styleUrls:['navbar.component.css']
})

export class NavbarComponent implements OnInit{
    
    location: Location;
    private toggleButton: any;
    private sidebarVisible: boolean;
    
    private route: ActivatedRoute;

    constructor(location: Location,  private element: ElementRef,private router: Router) {
      this.location = location;
          this.sidebarVisible = false;
    }

    ngOnInit(){
      
      const navbar: HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const body = document.getElementsByTagName('body')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');

        this.sidebarVisible = true;
    };
    sidebarClose() {
        const body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    sidebarToggle() {
        
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    };

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
     
      titlee = titlee.slice( 1 )
      
      return titlee.toLocaleUpperCase();
      
    }

    logOut(){
        sessionStorage.removeItem('token');

        this.router.navigate(['/login']);
    }
}
