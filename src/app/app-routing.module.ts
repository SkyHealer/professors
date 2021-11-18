import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ResearchComponent } from './research/research.component';

const routes: Routes = [
  {path:'' , component: HomeComponent , pathMatch:'full'},
  {path:'news' , component: NewsComponent},
  {path:'research' , component: ResearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
