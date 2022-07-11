import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutRouteComponent } from './Components/about-route/about-route.component';
import { ContactRouteComponent } from './Components/contact-route/contact-route.component';
import { HomeRouteComponent } from './Components/home-route/home-route.component';
import { ProjectsRouteComponent } from './Components/projects-route/projects-route.component';
import { ServicesRouteComponent } from './Components/services-route/services-route.component';
import { ProjectUploadRouteComponent } from './Components/project-upload-route/project-upload-route.component';
import { UploadAboutRouteComponent } from './Components/upload-about-route/upload-about-route.component';
import { SignupRouteComponent } from './Components/signup-route/signup-route.component';
import { LoginRouteComponent } from './Components/login-route/login-route.component';
import { ShowContactrQueryRouteComponent } from './Components/show-contactr-query-route/show-contactr-query-route.component';
import { ProjectUpdateRouteComponent } from './Components/project-update-route/project-update-route.component';
import { UpdateAboutRouteComponent } from './Components/update-about-route/update-about-route.component';

const routes: Routes = [
  { path: '', component: HomeRouteComponent },
  { path: 'About', component: AboutRouteComponent },
  { path: 'Projects', component: ProjectsRouteComponent },
  { path: 'Contact', component: ContactRouteComponent },
  { path: 'Services', component: ServicesRouteComponent },
  { path: 'Upload-Projects', component: ProjectUploadRouteComponent },
  { path: 'Upload-About', component: UploadAboutRouteComponent },
  { path: 'Signup', component: SignupRouteComponent },
  { path: 'Login', component: LoginRouteComponent },
  { path: 'Show-Contacts', component: ShowContactrQueryRouteComponent },
  { path: 'Update-Project/:id', component: ProjectUpdateRouteComponent },
  { path: 'Update-About/:id', component: UpdateAboutRouteComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

