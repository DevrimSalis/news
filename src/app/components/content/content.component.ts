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
  constructor(private contentService: ContentService, private albumService: AlbumsService) { }

  ngOnInit(): void {
    this.getContents()
  }
  getContents() {
    this.contentService.getContents().subscribe(response => {
      this.contents = response.articles;
    })
  }
}
