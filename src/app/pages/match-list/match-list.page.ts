import { Component } from '@angular/core';

// Définition de l'interface Match
interface Match {
  title: string;
  date: string;
  location: string;
  description: string;
  numberOfPlayers: number;
  visibility: 'public' | 'private';
}

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.page.html',
  styleUrls: ['./match-list.page.scss'],
})
export class MatchListPage {
  // Exemple de données de matchs
  matches: Match[] = [
    {
      title: 'Match 1',
      date: '2024-08-17',
      location: 'megrine',
      description: 'First match description',
      numberOfPlayers: 11,
      visibility: 'public'
    },
    {
      title: 'Match 2',
      date: '2024-08-18',
      location: 'Ben arous',
      description: 'Second match description',
      numberOfPlayers: 15,
      visibility: 'private'
    }
    // Ajoutez plus de matchs si nécessaire
  ];

  constructor() {}

  // Fonction pour mettre à jour un match
  updateMatch(match: Match) {
    console.log('Update match:', match);
    // Logique pour mettre à jour le match
  }

  // Fonction pour supprimer un match
  deleteMatch(match: Match) {
    console.log('Delete match:', match);
    // Logique pour supprimer le match
  }
}
