export  class ToDoModel{
  id: number;
  name: string;
  isDone: boolean;

  constructor() {
    this.id = 0;
    this.name = "";
    this.isDone = false;
  }
}
