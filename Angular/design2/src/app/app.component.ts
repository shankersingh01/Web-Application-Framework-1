import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <h1>Hello Students!</h1>
  <h2>Good Morning :)</h2>
  <h3>I am pineapple</h3>
  <img src="https://cdn.pixabay.com/photo/2015/07/30/11/05/pineapple-867245_640.jpg" alt="Pineapple">
`,
})
export class AppComponent {
  title = 'design2';
}
