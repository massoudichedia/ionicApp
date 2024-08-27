import { Component } from '@angular/core';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.page.html',
  styleUrls: ['./invitation.page.scss'],
})
export class InvitationPage {
  friends = [
    { name: 'Ami 1', selected: false },
    { name: 'Ami 2', selected: false },
    { name: 'Ami 3', selected: false },
    { name: 'Ami  4', selected: false }
  ];

  constructor() {}

  sendInvitations() {
    const selectedFriends = this.friends.filter(friend => friend.selected);
    if (selectedFriends.length > 0) {
      alert(`Invitations envoyées à : ${selectedFriends.map(friend => friend.name).join(', ')}`);
    } else {
      alert('Veuillez sélectionner au moins un ami pour envoyer une invitation.');
    }
  }
}
