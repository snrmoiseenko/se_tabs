import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "se-tab-title",
  template: `<ng-content></ng-content>`,
  styleUrls: ["./style/se-tab-title.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SETabTitleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
