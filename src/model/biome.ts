export class Biome {
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
