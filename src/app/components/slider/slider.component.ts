import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderMains: any = []
  sliderMains2: any = []
  sliderMains3: any = []
  showNavigationArrows = false;
  showNavigationIndicators = false;
  constructor(private contentService: ContentService) {

  }


  ngOnInit(): void {
    this.getSliders()
    this.getSliders2()
    this.getSliders3()
  }

  getSliders() {
    this.contentService.getContents().subscribe(response => {
      this.sliderMains = response.articles.slice(0, 1);
    })
  }
  getSliders2() {
    this.contentService.getContents().subscribe(response => {
      this.sliderMains2 = response.articles.splice(1).slice(0, 1);
    })
  }
  getSliders3() {
    this.contentService.getContents().subscribe(response => {
      this.sliderMains3 = response.articles.splice(2).slice(0, 1);
    })
  }
}
