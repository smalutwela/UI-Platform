import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
  ],
  declarations: [
    PagesComponent,
    NavbarComponent,
    ForumComponent,
    HomeComponent,
    PanelComponent,
    RegisterComponent,
  ],
})
export class PagesModule {
}
