import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'agf-admincontainer',
  templateUrl: './admincontainer.component.html',
  styleUrls: ['./admincontainer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdmincontainerComponent implements OnInit {
  title = 'Admin';
  navLinks: any[];
  activeLinkIndex = -1;

  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Teams',
        link: './teams',
        index: 0
      },
      {
        label: 'Surveys',
        link: './surveys',
        index: 1
      }
    ];
  }

  ngOnInit(): void {
    this.router.events.subscribe(res => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find(tab => tab.link === '.' + this.router.url)
      );
    });
  }
}
