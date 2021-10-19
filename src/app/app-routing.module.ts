import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PolicyComponent } from './pages/policy/policy.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'policy', component: PolicyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
