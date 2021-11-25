import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  toDoList :any = [];
  valid: boolean = true;

  addList(value: string) {
    if (value && value.length) {
    this.toDoList.push(value);
    } else {
      this.valid = false;
    }
  }

  todoList() {
    this.toDoList = [];
    console.log(this.toDoList);
  }

  removeList(index: number) {
    this.toDoList = this.toDoList.filter((element: any) => {
      return element !== this.toDoList[index];
    });
  }
}
