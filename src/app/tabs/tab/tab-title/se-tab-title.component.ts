import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "se-tab-title",
  template: `<ng-template><ng-content></ng-content></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SETabTitleComponent {
  @ViewChild(TemplateRef, { static: true })
  private template: TemplateRef<any>;

  getTemplate(): TemplateRef<any> {
    return this.template;
  }
}
