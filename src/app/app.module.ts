import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { HeaderComponent } from './Components/header/header.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectUploadComponent } from './Components/project-upload/project-upload.component';
import { HomeRouteComponent } from './Components/home-route/home-route.component';
import { AboutRouteComponent } from './Components/about-route/about-route.component';
import { ContactRouteComponent } from './Components/contact-route/contact-route.component';
import { ProjectsRouteComponent } from './Components/projects-route/projects-route.component';
import { EducationExperienceComponent } from './Components/education-experience/education-experience.component';
import { OurServicesComponent } from './Components/our-services/our-services.component';
import { ServicesRouteComponent } from './Components/services-route/services-route.component';
import { PortfolioComponent } from './Components/portfolio/portfolio.component';
import { ClintSayComponent } from './Components/clint-say/clint-say.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProjectUploadRouteComponent } from './Components/project-upload-route/project-upload-route.component';
import { UploadAboutComponent } from './Components/upload-about/upload-about.component';
import { UploadAboutRouteComponent } from './Components/upload-about-route/upload-about-route.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SignupRouteComponent } from './Components/signup-route/signup-route.component';
import { LoginComponent } from './Components/login/login.component';
import { LoginRouteComponent } from './Components/login-route/login-route.component';
import { ShowContactrQueryComponent } from './Components/show-contactr-query/show-contactr-query.component';
import { ShowContactrQueryRouteComponent } from './Components/show-contactr-query-route/show-contactr-query-route.component';
import { ProjectUpdateComponent } from './Components/project-update/project-update.component';
import { ProjectUpdateRouteComponent } from './Components/project-update-route/project-update-route.component';
import { UpdateAboutRouteComponent } from './Components/update-about-route/update-about-route.component';
import { UpdateAboutComponent } from './Components/update-about/update-about.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { UploadHeaderComponent } from './Components/upload-header/upload-header.component';
import { UploadHeaderRouteComponent } from './Components/upload-header-route/upload-header-route.component';
import { UpdateHeaderComponent } from './Components/update-header/update-header.component';
import { UpdateHeaderRouteComponent } from './Components/update-header-route/update-header-route.component';
import { UploadSkillComponent } from './Components/upload-skill/upload-skill.component';
import { UploadSkillRouteComponent } from './Components/upload-skill-route/upload-skill-route.component';
import { UpdateSkillComponent } from './Components/update-skill/update-skill.component';
import { UpdateSkillRouteComponent } from './Components/update-skill-route/update-skill-route.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    HeaderComponent,
    SkillsComponent,
    HomeRouteComponent,
    AboutRouteComponent,
    ContactRouteComponent,
    ProjectsRouteComponent,
    EducationExperienceComponent,
    OurServicesComponent,
    ServicesRouteComponent,
    PortfolioComponent,
    ClintSayComponent,
    ProjectUploadComponent,
    ProjectUploadRouteComponent,
    UploadAboutComponent,
    UploadAboutRouteComponent,
    SignupComponent,
    SignupRouteComponent,
    LoginComponent,
    LoginRouteComponent,
    ShowContactrQueryComponent,
    ShowContactrQueryRouteComponent,
    ProjectUpdateComponent,
    ProjectUpdateRouteComponent,
    UpdateAboutComponent,
    UpdateAboutRouteComponent,
    UploadHeaderComponent,
    UploadHeaderRouteComponent,
    UpdateHeaderComponent,
    UpdateHeaderRouteComponent,
    UploadSkillComponent,
    UploadSkillRouteComponent,
    UpdateSkillComponent,
    UpdateSkillRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
