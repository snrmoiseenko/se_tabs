import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "se-tab-content",
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SETabContentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
