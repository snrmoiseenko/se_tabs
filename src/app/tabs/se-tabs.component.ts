import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
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
export class SETabsComponent implements OnInit, AfterViewInit {
  @ContentChildren(SETabComponent)
  tabs: QueryList<SETabComponent>;

  selectedTabIndex = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.tabs.changes.subscribe((tabsQL: QueryList<SETabComponent>) => {
      if (tabsQL.length <= this.selectedTabIndex) {
        this.selectedTabIndex = 0;
      }
      this.cdr.markForCheck();
    });
  }

  getActiveTabContent() {
    if (this.tabs && this.tabs.length) {
      return this.tabs.toArray()[this.selectedTabIndex].getContent();
    }
  }

  selectTab(index: number): void {
    this.selectedTabIndex = index;
  }

  isTabSelected(index: number): boolean {
    return this.selectedTabIndex === index;
  }
}
