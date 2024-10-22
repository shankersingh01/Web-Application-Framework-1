import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../person.module';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {
  person!: Person;

  people: Person[] = [
    { id: 1, name: 'John Doe', contact: '123-456-7890', age: 28, email: 'john.doe@gmail.com', details: '' },
    { id: 2, name: 'Jane Smith', contact: '987-654-3210', age: 34, email: 'jane.smith@gmail.com', details: '' },
    { id: 3, name: 'Alice Johnson', contact: '555-555-5555', age: 30, email: 'alice.johnson@gmail.com', details: '' },
    { id: 4, name: 'Bob Brown', contact: '444-444-4444', age: 40, email: 'bob.brown@gmail.com', details: '' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.person = this.people.find(p => p.id === id)!;
  }
}
