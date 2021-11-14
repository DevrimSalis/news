import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderMains: any = []
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getSliders()
  }


  getSliders() {
    this.contentService.getContents().subscribe(response => {
      this.sliderMains = response.articles.slice(0, 1);
    })
  }
}
