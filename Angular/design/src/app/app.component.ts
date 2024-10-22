import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: '<h1>Hello Students!</h1><h2>Good Morning :)</h2><h3>I am pineapple</h3>',
  styles: ['h1{color:red}','h2{color:blue}','h3{color:green']
})
export class AppComponent {
  title = 'design';
}
