import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, MenubarModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  protected readonly title = signal('front');
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home'
            },
            {
                label: 'Features',
                icon: 'pi pi-star'
            },
            {
                label: 'Projects',
                icon: 'pi pi-search',
                items: [
                    {
                        label: 'Components',
                        icon: 'pi pi-bolt'
                    },
                    {
                        label: 'Blocks',
                        icon: 'pi pi-server'
                    },
                    {
                        label: 'UI Kit',
                        icon: 'pi pi-pencil'
                    },
                    {
                        label: 'Templates',
                        icon: 'pi pi-palette',
                        items: [
                            {
                                label: 'Apollo',
                                icon: 'pi pi-palette'
                            },
                            {
                                label: 'Ultima',
                                icon: 'pi pi-palette'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Contact',
                icon: 'pi pi-envelope'
            }
        ]
    }      
}
