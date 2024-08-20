import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-match',
  templateUrl: './create-match.page.html',
  styleUrls: ['./create-match.page.scss'],
})
export class CreateMatchPage {
  matchTitle: string;
  dateTime: string;
  location: string;
  description: string;
  numPlayers: number;
  visibility: string;

  constructor(private router: Router) {}

  submitForm() {
    // Logique pour traiter le formulaire, par exemple, enregistrer les données et naviguer
    console.log('Match Title:', this.matchTitle);
    console.log('Date and Time:', this.dateTime);
    console.log('Location:', this.location);
    console.log('Description:', this.description);
    console.log('Number of Players Required:', this.numPlayers);
    console.log('Visibility:', this.visibility);

    // Navigation vers la liste des matchs après la soumission
    this.router.navigate(['/match-list']);
  }
}
