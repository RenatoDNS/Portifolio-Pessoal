import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SobreComponent } from '../../components/sobre/sobre.component';
import { ProjetosComponent } from '../../components/projetos/projetos.component';
import { invokeParticles } from '../../app';

@Component({
  styleUrl: './home.scss',
  templateUrl: './home.html',
  imports: [CommonModule, SobreComponent, ProjetosComponent],
})
export class HomePage {
  ngOnInit(): void {
    invokeParticles();
  }
}
