import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Pour utiliser ngFor
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,  // Composant autonome
  imports: [CommonModule],
  templateUrl: './user-list.component.html'  // Chemin vers le fichier HTML
})
/*export class UserListComponent {
  /*users = [
    { name: 'Jean Phael', email: 'jeanphael@dataconsulting.tech' },
    { name: 'Example Name', email: 'example@example.com' },
    { name: 'John Doe', email: 'john.doe@example.com' }
  ];
}*/

export class UserListComponent implements OnInit {
  users: User[] = []; // Liste des utilisateurs à afficher
  errorMessage: string = ''; // Pour gérer les erreurs

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Appel à l'API lors de l'initialisation du composant
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data; // Mettre à jour la liste des utilisateurs
      },
      (error) => {
        this.errorMessage = 'Une erreur est survenue lors de la récupération des utilisateurs.';
        console.error('Erreur :', error); // Pour le débogage
      }
    );
  }
}