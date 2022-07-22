import { Component, OnInit } from "@angular/core";
import { Tabella } from "../models/tabella.model";
import { BehaviorSubject, Observable } from "rxjs";

@Component({
	selector: "app-gol",
	templateUrl: "./gol.component.html",
	styleUrls: ["./gol.component.sass"],
})
export class GolComponent implements OnInit {
	colonne: number = 40;
	righe: number = 40;
	generazione: number = 0;
	speed: number = 100;
	interval!: any;
	statoGol!: boolean; //true: attivo
	isActive: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	isActive$: Observable<boolean> = this.isActive.asObservable();

	tabella: Tabella = new Tabella(this.colonne, this.righe);

	constructor() {}

	ngOnInit(): void {
		this.isActive$.subscribe(bool => {
			this.statoGol = bool;
			if (!this.statoGol) {
				clearInterval(this.interval);
			} else {
				this.startAnimation();
			}
		});
	}

	ngAfterViewInit(): void {
		this.generateRandom();
	}

	startAnimation(): void {
		this.interval = setInterval(() => {
			this.tabella.checkTabella();
			this.generazione++;
		}, this.speed);
	}

	onClickChange(riga: number, colonna: number) {
		this.tabella.cambiaStato(riga, colonna);
	}

	changeSpeed(): void {
		if (this.statoGol) {
			this.isActive.next(false);
			this.isActive.next(true);
		}
	}

	generateRandom(): void {
		this.isActive.next(false);
		this.tabella.random();
		this.generazione = 0;
	}

	onClickClear(): void {
		this.isActive.next(false);
		this.tabella.clear();
		this.generazione = 0;
	}

	ngOnDestroy(): void {
		this.isActive.next(false);
	}
}
