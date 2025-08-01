import { Routes } from '@angular/router';

import { Explorepage } from './explorepage/explorepage';
import { Homepage } from './homepage/homepage';
import { Introductionpage } from './introductionpage/introductionpage';
import { Loginpage } from './loginpage/loginpage';
import { Postpage } from './postpage/postpage';
import { Settingspage } from './settingspage/settingspage';
import { Signuppage } from './signuppage/signuppage';
import { Userprofilepage } from './userprofilepage/userprofilepage';
import { Notfoundpage } from './notfoundpage/notfoundpage';

export const routes: Routes = [

    { path: 'explore', component: Explorepage },
    { path: 'home', component: Homepage },
    { path: '', component: Introductionpage },
    { path: 'login', component: Loginpage },
    { path: 'post', component: Postpage },
    { path: 'settings', component: Settingspage },
    { path: 'signup', component: Signuppage },
    { path: 'userprofile', component: Userprofilepage },
    { path: '**', component: Notfoundpage }

];
