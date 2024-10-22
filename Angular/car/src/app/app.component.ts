import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrComponent } from './carr/carr.component';
import { BikeComponent } from './bike/bike.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CarrComponent, BikeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "";
}
