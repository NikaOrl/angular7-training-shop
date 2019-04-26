import { Component, OnInit, Inject, InjectionToken } from '@angular/core';
import { LocalStorageService } from '../../../core/local-storage.service';
import { ConfigOptionsService } from '../../../core/config-options.service';
import {
  GeneratorNFactory,
  GeneratorService,
} from '../../../core/generator-n.factory';

const ConstantsService = new InjectionToken<string>('title');

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  providers: [
    LocalStorageService,
    ConfigOptionsService,
    { provide: ConstantsService, useValue: { App: 'TaskManager', Ver: '1.0' } },
    { provide: GeneratorService, useFactory: GeneratorNFactory(3) },
  ],
})
export class ContactUsComponent implements OnInit {
  content: string;
  constructor(
    private localStorageService: LocalStorageService,
    private configOptionsService: ConfigOptionsService,
    @Inject(ConstantsService) public ttl,
    @Inject(GeneratorService) private dataTop3: any[],
  ) {}

  ngOnInit() {
    this.content = `DataTop3: ${this.dataTop3}`;
  }
}
