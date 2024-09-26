import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // Assurez-vous d'importer HttpClientModule si nécessaire

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent }
  // Assurez-vous d'ajouter toutes les routes nécessaires ici
];
