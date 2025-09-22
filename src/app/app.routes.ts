import { Routes } from '@angular/router';
import { TenantLogin } from './tenant-login/tenant-login';
import { TenantSignUp } from './tenant-sign-up/tenant-sign-up';
import { OwnerLogin } from './owner-login/owner-login';
import { OwnerSignUp } from './owner-sign-up/owner-sign-up';

export const routes: Routes = [
    { path: '', redirectTo: 'tenant/login', pathMatch: 'full' },
    { path: 'tenant/login', component: TenantLogin },
    { path: 'tenant/signup', component: TenantSignUp },
    { path: 'owner/login', component: OwnerLogin },
    { path: 'owner/signup', component: OwnerSignUp },

];

