import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  facebookUrl = "http://facebook.com/";
  twitterUrl = "https://twitter.com/";
  instagramUrl = "https://instagram.com/";
  whatsappUrl = "https://web.whatsapp.com/";
  constructor() { }

  ngOnInit(): void {
  }

}
