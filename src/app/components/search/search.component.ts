import { PlayerService } from './../../services/player.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';


@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	private searchTerms = new Subject<string>();
	players: any;

	constructor(
		private playerService: PlayerService,
		private router: Router) { }
	ngOnInit(): void {
		this.players = this.searchTerms.pipe(
			// attendre 300ms de pause entre chaque requête
			debounceTime(300),
			// ignorer la recherche en cours si c'est la même que la précédente
			distinctUntilChanged(),
			// on retourne la liste des résultats correpsondant aux termes de la recherche
			switchMap((term: string) => this.playerService.searchPlayer(term))
		);
	}



	// Ajoute un terme de recherche dans le flux de l'Observable 'searchTerms'
	search(term: string): void {
		this.searchTerms.next(term);
	}

	gotoDetail(player: any): void {
		let link = ['display-player/', player.id];
		this.router.navigate(link);
	}

}
