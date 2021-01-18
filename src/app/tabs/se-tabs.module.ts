import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SETabsComponent } from "./se-tabs.component";
import { SETabComponent } from "./tab/se-tab.component";
import { SETabContentComponent } from "./tab/tab-content/se-tab-content.component";
import { SETabTitleComponent } from "./tab/tab-title/se-tab-title.component";
import { SEDynamicTabContentDirective } from "./tab/se-dynamic-tab-content.directive";

@NgModule({
  imports: [CommonModule],
  exports: [
    SETabsComponent,
    SETabComponent,
    SETabContentComponent,
    SETabTitleComponent,
    SEDynamicTabContentDirective,
  ],
  declarations: [
    SETabsComponent,
    SETabComponent,
    SETabContentComponent,
    SETabTitleComponent,
    SEDynamicTabContentDirective,
  ],
})
export class SETabs {}
