import { Component } from '@angular/core';
import {ToDoService} from "./shared/service/to-do.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ToDoList';

  constructor(public toDoService : ToDoService) {
  }

  addItem(item: string) {
    this.toDoService.addItem(item);
  }

  deleteItem(id: number) {
    this.toDoService.deleteItem(id);
  }

}

