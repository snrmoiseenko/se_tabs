import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
  TemplateRef,
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

  selectedTabIndex: number;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.selectTab(0);
    this.tabs.changes.subscribe((tabsQL: QueryList<SETabComponent>) => {
      if (tabsQL.length) {
        if (
          this.selectedTabIndex === undefined ||
          tabsQL.length <= this.selectedTabIndex
        ) {
          this.selectTab(0);
        }
      } else {
        this.selectedTabIndex = undefined;
      }

      this.cdr.markForCheck();
    });
  }

  getTab(index: number): SETabComponent {
    return this.tabs.toArray()[index];
  }

  getActiveTabContent(): TemplateRef<any> {
    if (this.tabs && this.tabs.length) {
      return this.getTab(this.selectedTabIndex).getContent();
    }
  }

  selectTab(index: number): void {
    if (this.selectedTabIndex === index) {
      return;
    }

    const prevTab = this.getTab(this.selectedTabIndex);
    const currTab = this.getTab(index);
    this.selectedTabIndex = index;

    if (prevTab) {
      prevTab.active = false;
    }
    if (currTab) {
      currTab.active = true;
    }
  }

  isTabSelected(index: number): boolean {
    return this.selectedTabIndex === index;
  }

  detectChanges(): void {
    this.cdr.detectChanges();
  }
}
