import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  itemCount: number = 0;
  todoItemText: string = '';
  todoItems: string[] = [];

  constructor() {}

  ngOnInit() {
    this.itemCount = this.todoItems.length;
  }

  addTodoItem() {
    this.todoItems.push(this.todoItemText);
    this.itemCount = this.todoItems.length;
  }

  removeTodoItem(index: number) {
    this.todoItems.splice(index, 1);
    this.itemCount = this.todoItems.length;
  }
}
