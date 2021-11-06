import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {
  technologies: any = []

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getTecs()
  }
  getTecs() {
    this.contentService.getTech().subscribe(response => {
      this.technologies = response.articles;
    })
  }
}