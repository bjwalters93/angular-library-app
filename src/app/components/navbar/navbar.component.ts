import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [Menubar, CommonModule, RouterLink, MenubarModule, ButtonModule],
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] | undefined;
  displayMode = signal(false);
  lightIcon = 'pi pi-sun';
  darkIcon = 'pi pi-moon';
  displayIcon = signal(this.lightIcon);

  toggleDisplayMode() {
    const element = document.querySelector('html');

    element!.classList.toggle('my-app-dark');
    // element!.classList.toggle('background-main');

    this.displayMode.update((current) => !current);

    if (!this.displayMode()) {
      this.displayIcon.set(this.lightIcon);
    } else {
      this.displayIcon.set(this.darkIcon);
    }
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Books',
        icon: 'pi pi-book',
        route: '/books',
      },
      {
        label: 'Patrons',
        icon: 'pi pi-users',
        route: '/patrons',
      },
      {
        label: 'Loans',
        icon: 'pi pi-receipt',
        route: '/loans',
      },
    ];
  }
}
