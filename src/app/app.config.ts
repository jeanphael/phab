import { ApplicationConfig } from '@angular/core';
import { provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { UserListComponent } from './user-list/user-list.component'; // Importer le composant UserList

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    /*provideRouter([
      { path: '', component: UserListComponent }, // Affiche UserListComponent à la racine
    ]),*/
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
  ]
};
