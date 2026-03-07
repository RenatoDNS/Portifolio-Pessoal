import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  diAmazonwebservicesPlainWordmark,
} from '@ng-icons/devicon/plain';
import { 
  diApachekafkaOriginal, 
  diArgocdOriginal, 
  diDockerOriginal, 
  diGithubOriginal, 
  diGitlabOriginal, 
  diGitOriginal, 
  diJavaOriginal,
  diKubernetesOriginal,
  diMongodbOriginal,
  diNewrelicOriginal,
  diPostgresqlOriginal,
  diPostmanOriginal,
  diSpringOriginal,
} from '@ng-icons/devicon/original';

@Component({
  selector: 'app-chip',
  styleUrl: './chip.scss',
  templateUrl: './chip.html',
  imports: [NgIcon],
  providers: provideIcons({
    diAmazonwebservicesPlainWordmark,
    diApachekafkaOriginal,
    diArgocdOriginal,
    diDockerOriginal,
    diGitOriginal,
    diGithubOriginal,
    diGitlabOriginal,
    diJavaOriginal,
    diKubernetesOriginal,
    diMongodbOriginal,
    diNewrelicOriginal,
    diPostgresqlOriginal,
    diPostmanOriginal,
    diSpringOriginal,
  }),
})
export class ChipComponent {
  @Input() iconName: string = '';
  @Input({ required: true }) text: string = '';
}
