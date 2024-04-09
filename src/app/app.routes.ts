import { Routes } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

export const routes: Routes = [
    {path: '', component: SignInComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'reset', component: ResetPasswordComponent},
];
