import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  diAmazonwebservicesPlainWordmark,
  diArgocdPlain,
  diDockerPlain,
  diGitlabPlain,
  diGitPlain,
  diJavaPlain,
} from '@ng-icons/devicon/plain';
import { diApachekafkaOriginal, diGithubOriginal} from '@ng-icons/devicon/original';

@Component({
  selector: 'app-chip',
  styleUrl: './chip.scss',
  templateUrl: './chip.html',
  imports: [NgIcon],
  providers: provideIcons({
    diAmazonwebservicesPlainWordmark,
    diApachekafkaOriginal,
    diArgocdPlain,
    diDockerPlain,
    diGitPlain,
    diGithubOriginal,
    diGitlabPlain,
    diJavaPlain,
  }),
})
export class ChipComponent {
  @Input() iconName: string = '';
  @Input({ required: true }) text: string = '';
}
