import { Routes } from '@angular/router';
import { Home } from './home/home';
// import { TenantSignup } from './tenant-signup/tenant-signup';
import { TenantComponent } from './tenant-component/tenant-component';

export const routes: Routes = [
    {path:'', redirectTo: 'home', pathMatch: 'full'},
    {path:'home', component:Home},
    // {path:'tenant/signup', component: TenantSignup},
    {path: 'tenant', component: TenantComponent},
];
