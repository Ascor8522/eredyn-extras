import { Biome } from "../model/biome";

export class BiomeRepository {
	private static instance: BiomeRepository;

	public static getInstance(): BiomeRepository {
		if(!BiomeRepository.instance) BiomeRepository.instance = new BiomeRepository();
		return BiomeRepository.instance;
	}

	private biomes: Biome[] = [
		new Biome("1", "Bois Obscur", { description: "Un dense et mystérieux enchevêtrement d'arbres anciens où la lumière peine à pénétrer. Les murmures du vent portent des légendes de créatures tapies dans l'ombre et de trésors oubliés. Les aventuriers y ressentent un mélange d'émerveillement et de menace, chaque pas sur le tapis moussu semblant réveiller l'attention d'une force ancestrale." }),
		new Biome("2", "Jungle Dense", { description: "Un labyrinthe luxuriant de végétation impénétrable où chaque recoin regorge de vie. Les lianes et les fougères géantes dissimulent des dangers mortels et des secrets anciens. Les bruits incessants de la faune créent une atmosphère oppressante, tandis que les aventuriers luttent pour progresser dans ce sanctuaire sauvage et imprévisible." }),
		new Biome("3", "Hautes Prairies", { description: "Une étendue infinie d'herbes ondulantes balayées par le vent, parsemée de fleurs sauvages et de collines douces. Le ciel s'y dévoile dans toute son immensité, et l'air est chargé du parfum de la nature. Derrière cette sérénité apparente, des prédateurs et des tempêtes soudaines peuvent surprendre les voyageurs imprudents." }),
		new Biome("4", "Desert de Verre", { description: "Une vaste étendue scintillante où le sable a fondu en d'étranges formations de verre sous une chaleur ancienne et dévastatrice. Les reflets aveuglants créent un paysage trompeur, où l'eau semble toujours proche mais reste hors de portée. Les voyageurs doivent affronter des températures extrêmes et des vents coupants, tout en évitant les créatures qui se cachent parmi les éclats tranchants." }),
		new Biome("5", "Montagne de Givre", { description: "Un sommet imposant enveloppé d'une éternelle couche de glace et de neige. Le froid mordant et les vents hurlants défient même les aventuriers les plus aguerris. Des grottes cristallines et des pics vertigineux abritent des créatures mystérieuses et des secrets figés dans le temps. Chaque ascension est une épreuve de volonté et de survie face à une nature implacable." }),
		new Biome("6", "Mer Hurlante", { description: "Un océan tumultueux où les vagues rugissent sans répit sous un ciel chargé de tempêtes. Les vents furieux et les eaux agitées semblent animés d'une volonté propre, défiant les marins qui osent s'y aventurer. Des îles mystérieuses et des créatures colossales se dissimulent dans ses profondeurs insondables, rendant chaque traversée aussi périlleuse que captivante." }),
	];

	private constructor() { }

	public getAll(): Biome[] {
		return this.biomes.slice();
	}

	public getById(id: Biome["id"]): Biome {
		const biome = this.biomes.find(biome => biome.id === id);
		if(!biome) throw new Error(`Biome with id ${id} not found`);
		return biome;
	}

	public searchByName(name: Biome["name"]): Biome[] {
		return this.biomes.filter(biome => biome.name.toLowerCase().includes(name.toLowerCase()));
	}

	public create(...args: ConstructorParameters<typeof Biome>): Biome {
		const biome = new Biome(...args);
		this.biomes.push(biome);
		return biome;
	}

	public deleteById(id: Biome["id"]): void {
		const index = this.biomes.findIndex(biome => biome.id === id);
		if(index === -1) throw new Error(`Biome with id ${id} not found`);
		this.biomes.splice(index, 1);
	}
}
