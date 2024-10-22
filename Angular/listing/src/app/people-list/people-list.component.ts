// src/app/people-list/people-list.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person.model';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  people: Person[] = [
    { id: 1, name: 'John Doe', contact: '123-456-7890', age: 30, gmail: 'john.doe@gmail.com' },
    { id: 2, name: 'Jane Smith', contact: '987-654-3210', age: 25, gmail: 'jane.smith@gmail.com' },
    { id: 3, name: 'Alice Johnson', contact: '555-666-7777', age: 28, gmail: 'alice.johnson@gmail.com' },
    { id: 4, name: 'Bob Brown', contact: '444-555-6666', age: 35, gmail: 'bob.brown@gmail.com' },
  ];

  constructor(private router: Router) {}

  viewDetails(id: number) {
    this.router.navigate(['/person', id]);
  }
}
