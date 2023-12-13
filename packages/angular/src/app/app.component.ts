import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import '@chatbootai/chat';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <nav>ChatBootAI</nav>
    <cba-chat></cba-chat>
  `,
  styles: [`
      nav {
        background: #333;
        color: #fff;
        padding: 16px;
        font-family:
          'Segoe UI',
          -apple-system,
          BlinkMacSystemFont,
          Roboto,
          'Helvetica Neue',
          sans-serif;
        font-size: 1.25rem;
      }
      cba-chat {
        display: block;
        max-width: 1024px;
        margin: 0 auto;
      }
  `],
})
export class AppComponent {
}
