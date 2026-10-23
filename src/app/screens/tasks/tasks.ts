import { Component } from '@angular/core';
import { Title } from '../../components/shared/title/title';

@Component({
  imports: [Title],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {}
