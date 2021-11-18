import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header-site',
  templateUrl: './header-site.component.html',
  styleUrls: ['./header-site.component.scss']
})
export class HeaderSiteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('buttonClose') buttonClose:any;

  onCloseNavbar(){
    console.log(window.innerWidth);
    if(window.innerWidth <768){
      this.buttonClose.nativeElement.click();
      console.log(window.innerWidth);
    }
  }

}
