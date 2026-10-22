import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent() {
            return import('./screens/home/home').then((m) => m.Home);
        }
    },
    {
        path: 'counter',
        loadComponent() {
            return import('./screens/counter/counter').then((m) => m.Counter);
        }
    },
    {
        path: 'tasks',
        loadComponent() {
            return import('./screens/tasks/tasks').then((m) => m.Tasks);
        }
    }
];
