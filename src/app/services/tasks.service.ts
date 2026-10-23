import { Service, signal } from '@angular/core';
import { Task } from '../model/task.model';

@Service()
export class TasksService {
    // As tasks não são readonly, mas a sua referência sim.
    private readonly _items = signal<Array<Task>>([
        { id: crypto.randomUUID(), title: 'Estudar Angular', completed: true},
        { id: crypto.randomUUID(), title: 'Revisar os Estudos', completed: false},
        { id: crypto.randomUUID(), title: 'Fazer um commit do projeto', completed: false}
    ]);

    readonly items = this._items.asReadonly();

    toggle(id: string) {
        this._items.update((items) =>
            items.map((item) =>
                item.id === id ? {... item, completed: !item.completed}: item
            )
        );
    }
}
