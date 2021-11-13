import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { Content } from 'src/app/models/content';
import { AlbumsService } from 'src/app/services/albums.service';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  contents: any = []
  techs: any = []
  spors: any = []
  sciences: any = []
  constructor(private contentService: ContentService, private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.getContents();
    this.getTechnologies();
    this.getSpors();
    this.getSiences();
  }
  getContents() {
    this.contentService.getContents().subscribe(response => {
      this.contents = response.articles.slice(0, 8);
    })
  }

  getTechnologies() {
    this.contentService.getTech().subscribe(response => {
      this.techs = response.articles.slice(0, 4);
    })
  }

  getSpors() {
    this.contentService.getSports().subscribe(response => {
      this.spors = response.articles.slice(0, 4);
    })
  }

  getSiences() {
    this.contentService.getSciences().subscribe(response => {
      this.sciences = response.articles.slice(0, 4);
    })
  }
}
