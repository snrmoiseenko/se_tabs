import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  TemplateRef,
} from "@angular/core";
import { SETabContentComponent } from "./tab-content/se-tab-content.component";

import { SETabTitleComponent } from "./tab-title/se-tab-title.component";

@Component({
  selector: "se-tab",
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SETabComponent {
  @ContentChild(SETabTitleComponent, { static: true })
  private title: SETabTitleComponent;

  @ContentChild(SETabContentComponent, { static: true })
  private content: SETabContentComponent;

  getTitle(): TemplateRef<any> {
    return this.title.getTemplate();
  }

  getContent(): TemplateRef<any> {
    return this.content.getContent();
  }
}
