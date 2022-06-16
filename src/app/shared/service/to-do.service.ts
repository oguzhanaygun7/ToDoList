import { Injectable } from '@angular/core';
import {ToDoModel} from "../model/ToDo.model";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  toDos: ToDoModel[] = [];
  constructor() { }

  addItem(item: string) {
    this.toDos.push({id: this.toDos.length, name: item, isDone: false})
  }

  deleteItem(id: number) {
    this.toDos = this.toDos.filter(item => item.id !== id);
  }
}
