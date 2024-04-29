import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tasks', component: TasksComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
