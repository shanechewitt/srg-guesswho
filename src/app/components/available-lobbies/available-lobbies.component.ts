import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

const exampleLobbies = [{
    name: 'Lobby 1',
    id: 1,
},
{
    name: 'Lobby 2',
    id: 2
}]

@Component({
    standalone: true,
    selector: 'app-available-lobbies',
    templateUrl: './available-lobbies.component.html',
    styleUrls: ['./available-lobbies.component.css'],
    imports: [CommonModule]
})
export class AvailableLobbiesComponent {
    lobbies = exampleLobbies;
    constructor(private router: Router) {}
    navigateToLobby(id: number) {
        this.router.navigate(['/game/' + id])
    }
}