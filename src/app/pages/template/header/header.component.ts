import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  title = "My Ticketing";
  subtitle = "Your personal ticketing portak for Uberticket";
  ngOnInit(): void {
  }

}
