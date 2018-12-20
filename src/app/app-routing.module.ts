import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './components/adduser/adduser.component';
import { ListuserComponent } from './components/listuser/listuser.component';
import { EdituserComponent } from './components/edituser/edituser.component';

const routes: Routes = [
  { path: 'add', component: AdduserComponent },
  { path: 'list', component: ListuserComponent },
  { path: 'edit', component: EdituserComponent },
  { path: '', component: ListuserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
