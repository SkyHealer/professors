import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ResearchComponent } from './research/research.component';
import { OpeningsComponent } from './openings/openings.component';
import { HeaderSiteComponent } from './shared/components/header-site/header-site.component';
import { FooterSiteComponent } from './shared/components/footer-site/footer-site.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ResearchComponent,
    OpeningsComponent,
    HeaderSiteComponent,
    FooterSiteComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
