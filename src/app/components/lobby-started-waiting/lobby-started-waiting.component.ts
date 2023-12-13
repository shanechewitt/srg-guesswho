import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    standalone: true,
    selector: 'app-lobby-started-waiting',
    templateUrl: './lobby-started-waiting.component.html',
    styleUrls: ['./lobby-started-waiting.component.css']
})
export class LobbyWaitingComponent {
    constructor(private router: Router) {}
}