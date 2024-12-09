import { Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
];
