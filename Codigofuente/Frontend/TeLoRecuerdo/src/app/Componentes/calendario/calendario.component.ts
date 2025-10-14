import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterModule, FormsModule]
})
export class CalendarioComponent implements OnInit {
  name: string = '';

  constructor() { }

  ngOnInit() {}

}