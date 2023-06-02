import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AddComponent } from './components/add/add.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CoursesService } from './courses.service';
import { UpdateCourseComponent } from './update/update.component';
import { UpdateProfComponent } from './update-prof/update-prof.component';
import { CertifComponent } from './certif/certif.component';
import { CertifListComponent } from './certif-list/certif-list.component';
import { UpdatecertifComponent } from './updatecertif/updatecertif.component';




@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AddComponent,
    UpdateCourseComponent,
    UpdateProfComponent,
    CertifComponent,
    CertifListComponent,
    UpdatecertifComponent,

  ],
  providers: [
    CoursesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
