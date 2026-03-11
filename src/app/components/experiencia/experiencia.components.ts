import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

export interface Experiencia {
  titleKey: string;
  year: string;
  descriptionKey: string;
  detailKey: string;
  image: string;
}

@Component({
  selector: 'app-experiencia',
  styleUrl: './experiencia.scss',
  templateUrl: './experiencia.html',
})
export class ExperienciaComponent {
  tSer = inject(TranslationService);
  selectedExp: Experiencia | null = null;

  experiencias: Experiencia[] = [
    { titleKey: 'expRedHatTitulo', year: '2025', descriptionKey: 'expRedHatDescricao', detailKey: 'expRedHatDetalhe', image: '/RedHatAcademy.png' },
  ];

  openModal(exp: Experiencia) {
    this.selectedExp = exp;
  }

  closeModal() {
    this.selectedExp = null;
  }

  onOverlayClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.closeModal();
    }
  }
}
