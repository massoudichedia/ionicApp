import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  // Méthode pour naviguer vers la page Profile
  goToProfile() {
    console.log('Navigating to profile...');
    this.router.navigate(['/profile']);
  }

  // Méthode pour naviguer vers la page Journals
  goToJournals() {
    this.router.navigate(['/journals']);
  }

  // Méthode pour naviguer vers la page Create Match
  goToMatch(){
    this.router.navigate(['/create-match']);
  }
}
