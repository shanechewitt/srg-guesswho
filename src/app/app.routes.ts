import { Routes } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { LobbyWaitingComponent } from './components/lobby-started-waiting/lobby-started-waiting.component';
import { AvailableLobbiesComponent } from './components/available-lobbies/available-lobbies.component';
import { GameComponent } from './components/game-page/game-page.component';

export const routes: Routes = [
    {
        path: '',
        component: GameComponent
    }
    // {
    //     path: 'lobby-waiting',
    //     component: LobbyWaitingComponent
    // },
    // {
    //     path: 'available-lobbies',
    //     component: AvailableLobbiesComponent
    // },
    // {
    //     path: 'game/:id',
    //     component: GameComponent
    // }
];
