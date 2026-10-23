import { Component, inject } from '@angular/core';
import { Title } from '../../components/shared/title/title';
import { TasksService } from '../../services/tasks.service';
import { MatIconModule } from '@angular/material/icon'

@Component({
  imports: [Title, MatIconModule],
  selector: 'app-tasks',
  styleUrl: './tasks.css',
  templateUrl: './tasks.html',
})
export class Tasks {
  readonly tasks = inject(TasksService)
}
