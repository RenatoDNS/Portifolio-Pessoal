import { Component, DOCUMENT, Inject, OnInit, Renderer2, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ParticlesConfigDark, ParticlesConfigLight } from './particles-config';

declare let particlesJS: any;

let theme: 'light' | 'dark' = 'dark';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('PortfolioLaboratorio');

  theme = theme;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    invokeParticles();
  }

  toggleTheme() {
    const htmlEl = this.document.documentElement;
    if (this.theme === 'dark') {
      this.renderer.removeClass(htmlEl, 'dark');
      this.theme = 'light';
    } else {
      this.renderer.addClass(htmlEl, 'dark');
      this.theme = 'dark';
    }
    theme = this.theme;
    invokeParticles();
  }
}

export function invokeParticles(): void {
  particlesJS(
    'particles-js',
    theme === 'dark' ? ParticlesConfigDark : ParticlesConfigLight,
    function () {},
  );
}
