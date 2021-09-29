import { SearchComponent } from './components/search/search.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { LogoComponent } from './components/logo/logo.component';
import { ItemsComponent } from './components/items/items.component';
import { BlogComponent } from './components/blog/blog.component';
import { VideosComponent } from './components/videos/videos.component';
import { ResultsComponent } from './components/results/results.component';
import { NewsComponent } from './components/news/news.component';
import { WordCupComponent } from './components/word-cup/word-cup.component';
import { LigaComponent } from './components/liga/liga.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchComponent } from './components/match/match.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { DisplayPlayerComponent } from './components/display-player/display-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { StadiumComponent } from './components/stadium/stadium.component';
import { AddStadiumComponent } from './components/add-stadium/add-stadium.component';


@NgModule({
  // l'ensemble des classes des components, des directives et des pipes
  // les noms des classes seront ajoutés automatiquement lors la génération
  // des components, des directives (personnalisées) et des pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServiceComponent,
    ContactComponent,
    LogoComponent,
    ItemsComponent,
    BlogComponent,
    VideosComponent,
    ResultsComponent,
    NewsComponent,
    WordCupComponent,
    LigaComponent,
    BlogPageComponent,
    MatchesComponent,
    MatchComponent,
    PlayersComponent,
    PlayerComponent,
    AdminComponent,
    LoginComponent,
    SignupComponent,
    AddMatchComponent,
    AddPlayerComponent,
    DisplayPlayerComponent,
    EditPlayerComponent,
    ReversePipe,
    SearchComponent,
    StadiumComponent,
    AddStadiumComponent
  ],
  // définir les modules externes
  imports: [
    BrowserModule,
    HttpClientModule,
    // InMemoryWebApiModule.forRoot(DataService),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
