import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Person } from '../person.module';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  people: Person[] = [
    { id: 1, name: 'John Doe', contact: '123-456-7890', age: 28, email: 'john.doe@gmail.com', details: '/details/1' },
    { id: 2, name: 'Jane Smith', contact: '987-654-3210', age: 34, email: 'jane.smith@gmail.com', details: '/details/2' },
    { id: 3, name: 'Alice Johnson', contact: '555-555-5555', age: 30, email: 'alice.johnson@gmail.com', details: '/details/3' },
    { id: 4, name: 'Bob Brown', contact: '444-444-4444', age: 40, email: 'bob.brown@gmail.com', details: '/details/4' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToDetails(person: Person): void {
    this.router.navigate([person.details]);
  }
}
