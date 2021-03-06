import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './components/navi/navi.component';
import { SliderComponent } from './components/slider/slider.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './components/content/content.component';
import { SliderRightComponent } from './components/slider/slider-right/slider-right.component';
import { TechnologyComponent } from './components/content/technology/technology.component';
import { BusinessComponent } from './components/content/business/business.component';
import { SporComponent } from './components/content/spor/spor.component';
import { ScienceComponent } from './components/content/science/science.component';
import { FilterContentPipe } from './pipes/filter-content.pipe';
import { HotComponent } from './components/hot/hot.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    SliderComponent,
    FooterComponent,
    ContentComponent,
    SliderRightComponent,
    TechnologyComponent,
    BusinessComponent,
    SporComponent,
    ScienceComponent,
    FilterContentPipe,
    HotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
