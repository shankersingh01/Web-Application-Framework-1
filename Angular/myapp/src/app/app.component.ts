import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template:'<h1>Hello World</h1>',
  styles: [                  // Inline styles: CSS styles specific to this component.
    `
    h1 {
      font-size: 100px;
    }
    `
  ]
})
export class AppComponent {
  title = 'myapp';
}
