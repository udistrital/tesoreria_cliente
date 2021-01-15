import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';


@Component({
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar" (click)="toggleSidebar($event)" tag="menu-sidebar" responsive>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {

  constructor(
    private sidebarService: NbSidebarService,
  ) {

  }

  toggleSidebar(event): boolean {
    // console.log(event.target.nextSibling)
    if (event.target.className !== null) {
      if (event.target.nextSibling === null &&
        (event.target.className === 'menu-title' || event.target.lastElementChild.className === 'menu-title')) {
        this.sidebarService.toggle(true, 'menu-sidebar');
        return false;
      }
      return true;
    } else {
      return true;
    }
  }
}
