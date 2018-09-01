import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup } from '@angular/forms';

import { PlayerService } from '../../services/player.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  positions = new FormControl();
  weeks = new FormControl();
  positionForm: FormGroup;
  weekForm: FormGroup;
  positionList: string[] = ['QB', 'RB', 'WR', 'TE','DST'];
  weekList: string[] = ['1','2','3','4','5','6','7','8','9',
                        '10','11','12','13','14','15','16','17'];

  constructor(private formBuilder: FormBuilder,private playerService: PlayerService) { }

  ngOnInit() {
     this.positionForm = this.formBuilder.group({
       QB: '',
       RB: '',
       WR: '',
       TE: '',
       DST: ''
     });
     this.onChanges();
  }

   onChanges(): void {
     this.positionForm.valueChanges.subscribe(val => {
       this.playerService.getQbs();
     });
   }

}
