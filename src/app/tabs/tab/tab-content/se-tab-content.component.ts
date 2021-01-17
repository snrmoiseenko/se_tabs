import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "se-tab-content",
  template: `<ng-template><ng-content></ng-content></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SETabContentComponent {
  @ViewChild(TemplateRef, { static: true })
  private template: TemplateRef<any>;

  getContent(): TemplateRef<any> {
    return this.template;
  }
}
