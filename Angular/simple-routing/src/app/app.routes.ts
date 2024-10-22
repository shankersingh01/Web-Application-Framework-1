import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App Home Page',
        component: HomeComponent,
    },
    {
        path: 'user',
        title: 'App About Page',
        component: AboutComponent,
    },
    {
        path: 'service',
        title: 'App Services Page',
        component: ServiceComponent,
    },
    {
        path: 'contact',
        title: 'App Contact Page',
        component: ContactComponent,
    }
];
