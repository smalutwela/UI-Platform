import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { PanelComponent } from './panel/panel.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BlogComponent } from './blog/blog.component';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { AuthGuard } from '../guards/auth.guard';
import { NotAuthGuard } from '../guards/notAuth.guard';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      // redirectTo: 'charts/chartjs',
      redirectTo: 'forum',
      pathMatch: 'full',
    },
    { path: 'forum', 
    component: ForumComponent, 
    },
    { path: 'forum/home', 
    component: HomeComponent, 
    },
    { path: 'forum/dashboard', 
    component: PanelComponent,
    canActivate: [AuthGuard] 
    },
    { path: 'forum/register', 
    component: RegisterComponent,
    canActivate: [NotAuthGuard]  
    },
    { path: 'forum/login', 
    component: LoginComponent,
    canActivate: [NotAuthGuard]  
    },
    { path: 'forum/profile', 
    component: ProfileComponent,
    canActivate: [AuthGuard] 
    },
    { path: 'forum/blog', 
    component: BlogComponent,
    canActivate: [AuthGuard] 
    },
    { path: 'forum/edit-blog/:id',
    component: EditBlogComponent,
    canActivate: [AuthGuard] 
    },        
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
