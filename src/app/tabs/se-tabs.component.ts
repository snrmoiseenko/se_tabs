import {
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from "@angular/core";
import { SETabComponent } from "./tab/se-tab.component";

@Component({
  selector: "se-tabs",
  templateUrl: "se-tabs.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SETabsComponent implements OnInit {
  @ContentChildren(SETabComponent)
  tabs: QueryList<SETabComponent>;

  constructor() {}

  ngOnInit() {}
}
