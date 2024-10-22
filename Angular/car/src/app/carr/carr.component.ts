import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carr',
  standalone: true,
  imports: [],
  templateUrl: './carr.component.html',
  styleUrl: './carr.component.css'
})
export class CarrComponent implements OnInit{
  title:string
  constructor(){
    this.title="Audi"
  }
  ngOnInit(){}

}
