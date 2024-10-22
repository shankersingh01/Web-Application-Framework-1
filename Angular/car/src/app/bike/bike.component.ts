import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike',
  standalone: true,
  imports: [],
  templateUrl: './bike.component.html',
  styleUrl: './bike.component.css'
})
export class BikeComponent implements OnInit{
  title:string
  constructor(){
    this.title="Hayabusa"
  }
  ngOnInit(){}
}
