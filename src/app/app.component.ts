import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'professor-front';
  constructor(private metaTagService: Meta , private titleService: Title){}

  ngOnInit() {
      this.metaTagService.addTags([
        {name: 'keywords' , content: 'Angular SEO, Angular Universal'},
        {name: 'robots' , content: 'index, follow'},
        {name: 'author' , content: 'Hossein Rahmiyan'},
        {name: 'viewport' , content: 'width=device-width, initial-scale=1'},
        {name: 'date' , content: '2021-11-17' , scheme: 'YYYY-MM-DD'},
        {charset: 'UTF-8'}
      ]);
  }
}

