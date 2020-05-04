import { Card } from './cards/card';

export class Game  {
    config: GameConfig
}

export class GameConfig {
    gameItems: Array<Card>;

    playerCountMin: number;
    playerCountMax: number;
    playerCountAllowed: Array<number>;
    
    teams: boolean;
    teamsPlayerCount: number;
    teamsCount: number;
}