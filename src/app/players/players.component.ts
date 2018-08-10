import { Component, OnInit } from '@angular/core';

import { PlayerService } from '../../services/player.service';
import { Player } from '../../models/Player';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players: Player[];
  columnsToDisplay = [ 'players', 'position','projection','salary','dpp'];

  constructor(private playerService : PlayerService) { }

  ngOnInit() {
    this.playerService.getPlayers().subscribe(players => {
      this.players = players

    });
  }

}
