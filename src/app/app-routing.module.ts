import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './components/content/business/business.component';
import { ContentComponent } from './components/content/content.component';
import { ScienceComponent } from './components/content/science/science.component';
import { SporComponent } from './components/content/spor/spor.component';
import { TechnologyComponent } from './components/content/technology/technology.component';

const routes: Routes = [
  { path: "", component: ContentComponent },
  { path: "contents", component: ContentComponent },
  { path: "technology", component: TechnologyComponent },
  { path: "business", component: BusinessComponent },
  { path: "sport", component: SporComponent },
  { path: "science", component: ScienceComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
