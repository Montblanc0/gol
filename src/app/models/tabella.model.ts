import * as _ from "lodash";
export type Bit = 0 | 1;
export class Tabella {
	tabella: Bit[][];
	larghezza: number = 0;
	altezza: number = 0;
	constructor(larghezza: number, altezza: number) {
		this.larghezza = larghezza;
		this.altezza = altezza;
		this.tabella = [];
		//Inizializzazione di ogni cella a 0
		for (let i = 0; i < larghezza; i++) {
			this.tabella[i] = [];
			for (let j = 0; j < altezza; j++) {
				this.tabella[i][j] = 0;
			}
		}
	}

	stato(x: number, y: number): Bit {
		return this.tabella[x][y];
	}

	cambiaStato(x: number, y: number): void {
		this.tabella[x][y] = this.tabella[x][y] === 0 ? 1 : 0;
	}

	clear(): void {
		for (let i = 0; i < this.larghezza; i++) {
			for (let j = 0; j < this.altezza; j++) {
				this.tabella[i][j] = 0;
			}
		}
	}

	random(): void {
		for (let i = 0; i < this.larghezza; i++) {
			for (let j = 0; j < this.altezza; j++) {
				this.tabella[i][j] = Math.random() > 0.5 ? 1 : 0;
				// this.tabella[i][j] = _.sample([0, 1])!;
			}
		}
	}

	checkAllDead(): boolean {
		const check = _.union(_.flatten(this.tabella));
		if (check.length == 1 && check[0] === 0) return true;
		return false;
	}

	checkTabella() {
		//è necessaria una tabella di appoggio che andrà a costituire il nuovo stato di tutta la tabella. Lavorando direttamente su this.tabella cambierebbe in corso d'opera lo stato di ogni cella e il comportamento sarebbe errato

		//vengono applicate le regole a tutte le celle e il risultato viene copiato nella tabella nextGen
		let nextGen: Bit[][] = [];
		for (let i: number = 0; i < this.larghezza; i++) {
			nextGen[i] = [];
			for (let j = 0; j < this.altezza; j++) {
				// nextGen[i].push(this.applicaRegole(i, j));
				nextGen[i][j] = this.applicaRegole(i, j);
			}
		}
		//la nuova generazione diventa la generazione attuale
		this.tabella = nextGen;
	}

	applicaRegole(x: number, y: number): Bit {
		//Prende in esame una singola cella e le applica le regole del gioco

		//Riferimenti cardinali di ogni cella
		//Se toccano il bordo -> effetto PacMan
		const sinistra = x - 1 < 0 ? this.larghezza - 1 : x - 1;
		const destra = x + 1 >= this.larghezza ? 0 : x + 1;
		const giu = y - 1 < 0 ? this.altezza - 1 : y - 1;
		const su = y + 1 >= this.altezza ? 0 : y + 1;

		//Somma dei vicini di una singola cella
		const vicini =
			this.tabella[x][su] +
			this.tabella[destra][su] +
			this.tabella[destra][y] +
			this.tabella[destra][giu] +
			this.tabella[x][giu] +
			this.tabella[sinistra][giu] +
			this.tabella[sinistra][y] +
			this.tabella[sinistra][su];

		const statoAttuale = this.tabella[x][y]; //viva o morta

		//Se è viva e i vicini sono 2 o 3, sopravvive
		if (statoAttuale === 1 && (vicini === 2 || vicini === 3))
			// if (statoAttuale === 1 && vicini === (2 || 3))
			return 1;
		//Se è morta e i vicini sono 3, risorge
		if (statoAttuale === 0 && vicini === 3) return 1;
		// In tutti gli altri casi muore/resta morta
		return 0;
	}
}
