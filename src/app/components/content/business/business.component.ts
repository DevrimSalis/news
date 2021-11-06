import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {
  businesses: any = []
  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getBusinesses();
  }


  getBusinesses() {
    this.contentService.getBusinesses().subscribe(response => {
      this.businesses = response.articles;
    })
  }
}
