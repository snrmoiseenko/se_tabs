import {
  ChangeDetectorRef,
  Directive,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { SETabComponent } from './se-tab.component';
import { SETabsComponent } from '../se-tabs.component';

@Directive({ selector: '[seDynamicTabContent]' })
export class SEDynamicTabContentDirective {
  constructor(
    private vc: ViewContainerRef,
    private tr: TemplateRef<any>,
    private tab: SETabComponent,
    private tabs: SETabsComponent,
    private cdr: ChangeDetectorRef
  ) {
    this.renderView(this.tab.active);
    this.tab.isActive.subscribe((isActive) => this.renderView(isActive));
  }

  renderView(isActive: boolean): void {
    if (isActive) {
      this.vc.createEmbeddedView(this.tr);
      this.cdr.detectChanges();
    } else {
      this.vc.clear();
    }

    // Call change detectition to render template through templateOutlet
    this.tabs.detectChanges();
  }
}
