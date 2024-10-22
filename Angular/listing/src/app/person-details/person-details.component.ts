// src/app/person-details/person-details.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../person.model';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person: Person | undefined;

  private people: Person[] = [
    { id: 1, name: 'John Doe', contact: '123-456-7890', age: 30, gmail: 'john.doe@gmail.com' },
    { id: 2, name: 'Jane Smith', contact: '987-654-3210', age: 25, gmail: 'jane.smith@gmail.com' },
    { id: 3, name: 'Alice Johnson', contact: '555-666-7777', age: 28, gmail: 'alice.johnson@gmail.com' },
    { id: 4, name: 'Bob Brown', contact: '444-555-6666', age: 35, gmail: 'bob.brown@gmail.com' },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.people.find(p => p.id === id);
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
