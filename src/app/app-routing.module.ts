import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { PlayersComponent } from './components/players/players.component';
import { MatchesComponent } from './components/matches/matches.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


let x:string = 'Abderrahmen';

const routes: Routes = [
  {path: '', component: HomeComponent},
  // localhost:4200/contact => Afficher 
  //contact component
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: BlogPageComponent},
  {path: 'matches', component: MatchesComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'add-match', component: AddMatchComponent},
  {path: 'add-player', component: AddPlayerComponent},
  {path: 'add-stadium', component: AddStadiumComponent},
  {path: 'display-player/:id', component: DisplayPlayerComponent},
  {path: 'edit-player/:id', component: EditPlayerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
