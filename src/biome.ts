export class Biome {
	private static biomes: Biome[] = [];

	public static getAll(): Biome[] {
		return Biome.biomes.slice();
	}

	public static getById(id: string): Biome {
		const biome = Biome.biomes.find(biome => biome.id === id);
		if(!biome) throw new Error(`Biome with id ${id} not found`);
		return biome;
	}

	public static searchByName(name: string): Biome[] {
		return Biome.biomes.filter(biome => biome.name.toLowerCase().includes(name.toLowerCase()));
	}

	public static create(...args: ConstructorParameters<typeof Biome>): Biome {
		const biome = new Biome(...args);
		Biome.biomes.push(biome);
		return biome;
	}

	public static deleteById(id: string): void {
		const index = Biome.biomes.findIndex(biome => biome.id === id);
		if(index === -1) throw new Error(`Biome with id ${id} not found`);
		Biome.biomes.splice(index, 1);
	}

	public id: string;
	public name: string;
	public description: string;
	public image?: string;
	public actorIds: string[];

	public constructor(id: Biome["id"], name: Biome["name"], options: Partial<BiomeOptions> = {}) {
		this.id = id;
		this.name = name;
		this.description = options.description ?? "";
		this.image = options.image;
		this.actorIds = [];
	}

	public get actorCount(): number {
		return this.actorIds.length;
	}
}

export type BiomeOptions = Omit<Biome, "id" | "name" | "actorIds">;
