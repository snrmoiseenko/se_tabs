import { NgModule } from "@angular/core";

import { SETabsComponent } from "./se-tabs.component";
import { SETabComponent } from "./tab/se-tab.component";
import { SETabContentComponent } from "./tab/tab-content/se-tab-content.component";
import { SETabTitleComponent } from "./tab/tab-title/se-tab-title.component";

@NgModule({
  exports: [
    SETabsComponent,
    SETabComponent,
    SETabContentComponent,
    SETabTitleComponent,
  ],
  declarations: [
    SETabsComponent,
    SETabComponent,
    SETabContentComponent,
    SETabTitleComponent,
  ],
})
export class SETabs {}
