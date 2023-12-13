import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    standalone: true,
    templateUrl: './welcome-page.component.html',
    styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
    constructor(private router: Router) {}

    navigateToLobbyWaiting() {
        this.router.navigate(['/lobby-waiting']);
    }

    navigateToAvailableLobbies() {
        this.router.navigate(['/available-lobbies']);
    }
}