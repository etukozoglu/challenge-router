import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const ROUTES: Routes = [
    { path: 'menu', component: MenuComponent },
    { path: 'signup', component: SignupComponent },
    {path: 'user', component: UserProfileComponent },
    { path: '', component: UserProfileComponent },


];

export { ROUTES };

