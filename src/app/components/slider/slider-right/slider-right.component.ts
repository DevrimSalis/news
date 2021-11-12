import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-slider-right',
  templateUrl: './slider-right.component.html',
  styleUrls: ['./slider-right.component.css']
})
export class SliderRightComponent implements OnInit {
  sliderRights: any = [];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getSliders();
  }

  getSliders() {
    this.contentService.getContents().subscribe(response => {
      this.sliderRights = response.articles.splice(1).slice(0, 2);
    })
  }
}
