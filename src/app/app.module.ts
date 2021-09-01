import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TouslesemployesComponent } from './touslesemployes/touslesemployes.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { GroupeAdminComponent } from './groupe-admin/groupe-admin.component';
import { JourferierComponent } from './jourferier/jourferier.component';
import { PresadminComponent } from './presadmin/presadmin.component';
import { GestionrevendicationComponent } from './gestionrevendication/gestionrevendication.component';
import { DemandepermissionComponent } from './demandepermission/demandepermission.component';
import { DemanderevendicationComponent } from './demanderevendication/demanderevendication.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { GestionpermissionComponent } from './gestionpermission/gestionpermission.component';
import { CongesComponent } from './conges/conges.component';
import { ProfilemployeComponent } from './profilemploye/profilemploye.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { TraitementRevendicationComponent } from './traitement-revendication/traitement-revendication.component';
import { TraitementPermissionComponent } from './traitement-permission/traitement-permission.component';
import { PresenceEmployeComponent } from './presence-employe/presence-employe.component';
import { GroupeEmployeComponent } from './groupe-employe/groupe-employe.component';
import { JourferieremployeComponent } from './jourferieremploye/jourferieremploye.component';
import { CongesEmployeComponent } from './conges-employe/conges-employe.component';

const appRoutes: Routes = [
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'touslesemployes', component: TouslesemployesComponent },
  { path: 'groupe-admin', component: GroupeAdminComponent },
  { path: 'jourferier', component: JourferierComponent },
  { path: 'presadmin', component: PresadminComponent },
  { path: 'gestionrevendication', component: GestionrevendicationComponent },
  { path: 'demandepermission', component: DemandepermissionComponent },
  { path: 'demanderevendication', component: DemanderevendicationComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'gestionpermission', component: GestionpermissionComponent },
  { path: 'conges', component: CongesComponent },
  { path: 'profilemploye', component: ProfilemployeComponent },
  { path: 'traitement-revendication', component: TraitementRevendicationComponent },
  { path: 'traitement-permission', component: TraitementPermissionComponent },
  { path: 'presence-employe', component: PresenceEmployeComponent },
  { path: 'groupe-employe', component: GroupeEmployeComponent, },
  { path: 'jourferieremploye', component: JourferieremployeComponent, },
  { path: 'conges-employe', component: CongesEmployeComponent, },
  { path: '', component: AuthentificationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TouslesemployesComponent,
    JourferierComponent,
    AuthentificationComponent,
    TouslesemployesComponent,
    NavAdminComponent,
    GroupeAdminComponent,
    JourferierComponent,
    PresadminComponent,
    GestionrevendicationComponent,
    DemandepermissionComponent,
    DemanderevendicationComponent,
    NotificationsComponent,
    GestionpermissionComponent,
    CongesComponent,
    ProfilemployeComponent,
    TraitementRevendicationComponent,
    TraitementPermissionComponent,
    PresenceEmployeComponent,
    GroupeEmployeComponent,
    JourferieremployeComponent,
    CongesEmployeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    MatSliderModule,
    RouterModule.forRoot(appRoutes), 
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
