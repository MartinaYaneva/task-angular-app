import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './button/button.module';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SimpleTaskComponent } from './components/simple-task/simple-task.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { ArchiveComponent } from './components/archive/archive.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TasksComponent,
    SimpleTaskComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
