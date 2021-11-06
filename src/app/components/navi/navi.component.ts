import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  currentCategory: any;
  constructor() { }

  ngOnInit(): void {
  }
  setCurrentCategory(category: any) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: any) {
    if (category == this.currentCategory) {
      return "list-group-item active"
    } else {
      return "list-group-item"
    }
  }
}
