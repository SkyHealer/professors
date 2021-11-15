import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'professor-front';

  @ViewChild('buttonClose') buttonClose:any;

  onCloseNavbar(){
    console.log(window.innerWidth);
    if(window.innerWidth <768){
      this.buttonClose.nativeElement.click();
      console.log(window.innerWidth);
    }
  }
}

