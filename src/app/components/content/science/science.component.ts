import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {
  sciences: any = [];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getSciences();
  }

  getSciences() {
    this.contentService.getSciences().subscribe(response => {
      this.sciences = response.articles;
    })
  }
}
