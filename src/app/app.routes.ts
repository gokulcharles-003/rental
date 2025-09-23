import { Routes } from '@angular/router';
import { Home } from './home/home';
import { TenantSignUp } from './tenant-sign-up/tenant-sign-up';
import { TenantLogin } from './tenant-login/tenant-login';
import { TenantComponent } from './tenant-component/tenant-component';
import { OwnerComponent } from './owner-component/owner-component';
import { OwnerLogin } from './owner-login/owner-login';
import { OwnerSignUp } from './owner-sign-up/owner-sign-up';
import { TenantLeaseComponent } from './tenant-lease/tenant-lease';
import { TenantApplications } from './tenant-applications/tenant-applications';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: Home},
    {path: 'tenant/signup', component: TenantSignUp},
    {path: 'tenant/login', component: TenantLogin},
    {path: 'tenant', component:TenantComponent},
    {path: 'owner/login', component: OwnerLogin},
    {path: 'owner/signup', component: OwnerSignUp},
    {path: "owner", component: OwnerComponent},
    {path: "tenant/leases", component: TenantLeaseComponent},
    {path: "tenant/applications", component: TenantApplications}
];


