import { Component, OnInit, signal } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  toggleDisplayMode() {
    const element = document.querySelector('html');

    element!.classList.toggle('my-app-dark');

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
        items: [
          {
            label: 'Book List',
            icon: 'pi pi-list',
            route: '/books',
          },
          {
            label: 'New Book',
            icon: 'pi pi-plus',
            route: '/books/new',
          },
        ],
      },
      {
        label: 'Patrons',
        icon: 'pi pi-users',
        items: [
          {
            label: 'Patron List',
            icon: 'pi pi-list',
            route: '/patrons',
          },
          {
            label: 'New Patron',
            icon: 'pi pi-user-plus',
            route: '/patrons/new',
          },
        ],
      },
      {
        label: 'Loans',
        icon: 'pi pi-receipt',
        items: [
          {
            label: 'Loans List',
            icon: 'pi pi-list',
            route: '/loans',
          },
          {
            label: 'New Loan',
            icon: 'pi pi-plus',
            route: '/loans/new',
          },
        ],
      },
    ];
  }
}
