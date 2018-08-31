import { Component, OnInit } from '@angular/core';
import {FormControl } from '@angular/forms';

import { PlayerService } from '../../services/player.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  positions = new FormControl();
  positionList: string[] = ['QB', 'RB', 'WR', 'TE','D/ST'];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

  loadQbs() {
    if(this.positions) {

    }
  }
}
