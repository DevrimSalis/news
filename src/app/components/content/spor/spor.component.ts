import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-spor',
  templateUrl: './spor.component.html',
  styleUrls: ['./spor.component.css']
})
export class SporComponent implements OnInit {
  sports: any = [];
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getSports();
  }

  getSports() {
    this.contentService.getSports().subscribe(response => {
      this.sports = response.articles;
    })
  }
}
