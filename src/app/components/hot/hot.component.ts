import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-hot',
  templateUrl: './hot.component.html',
  styleUrls: ['./hot.component.css']
})
export class HotComponent implements OnInit {

  hots: any = [];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getHots();
  }

  getHots() {
    this.contentService.getContents().subscribe(response => {
      this.hots = response.articles.slice(0, 1);
    })
  }
}
