import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TicketsComponent } from './tickets/tickets.component';
import { AboutComponent } from './about/about.component';
import { TwoColumnComponent } from './layouts/two-column/two-column.component';
import { OneColumnComponent } from './layouts/one-column/one-column.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { EditComponent } from './edit/edit.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { TicketViewComponent } from './tickets/ticket-view/ticket-view.component';

const routes: Routes = [
  { path: '', component: TwoColumnComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'tickets', component: TicketsComponent, children: [
      { path: '', component: TicketListComponent},
      { path: ':id/view', component: TicketViewComponent }
    ]},
    { path: 'edit', component: EditComponent},
  ]},
  { path: '', component: OneColumnComponent, children: [
    { path: 'about-us', component: AboutComponent},
    { path: 'login', component: LoginComponent},
  ]},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    TicketsComponent,
    AboutComponent,
    TwoColumnComponent,
    OneColumnComponent,
    SidebarComponent,
    TicketListComponent,
    TicketViewComponent,
  ],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class PagesModule { }
