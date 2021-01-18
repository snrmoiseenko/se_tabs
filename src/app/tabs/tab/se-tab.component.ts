import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  Output,
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

  @ContentChild(SETabContentComponent, { static: false })
  private content: SETabContentComponent;

  private _active = false;

  set active(val: boolean) {
    this._active = val;
    this.isActive.emit(val);
  }

  get active(): boolean {
    return this._active;
  }

  @Output()
  isActive = new EventEmitter<boolean>();

  getTitle(): TemplateRef<any> {
    return this.title.getTemplate();
  }

  getContent(): TemplateRef<any> {
    return this.content && this.content.getContent();
  }
}
