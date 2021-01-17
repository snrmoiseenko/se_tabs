import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  TemplateRef,
} from "@angular/core";

import { SETabTitleComponent } from "./tab-title/se-tab-title.component";

@Component({
  selector: "se-tab",
  templateUrl: "se-tab.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SETabComponent {
  @ContentChild(SETabTitleComponent, { static: true })
  private title: SETabTitleComponent;

  getTitle(): TemplateRef<any> {
    return this.title?.getTemplate();
  }

  constructor() {}
}
