import { Biome } from "./biome";
import { BiomeDetails } from "./biome-details";

export class BiomeListWindow extends Application {
	public static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			id: "eredyn-extras-biome-list",
			template: "modules/eredyn-extras/templates/biome-list.hbs",
			title: game.i18n?.localize("EREDYN-EXTRAS.biome-list.title") ?? "Biomes",
			popOut: true,
			resizable: true,
			width: 600,
			height: 400,
		});
	}

	public override getData() {
		return {
			biomes: Biome.getAll(),
		};
	}

	public async _handleButtonClick(event: Event, formData?: object) {
		const dataset = (event.currentTarget as HTMLElement).dataset;
		const action = dataset.action;
		const id = dataset.id;

		console.warn("Action", action, "ID", id);

		switch(action) {
			case "edit": break;
			case "delete": break;
			case "create": new BiomeDetails().render(true); break;
		}
	}

	protected _updateObject(event: Event, formData?: object): Promise<unknown> {
		throw new Error("Method not implemented.");
	}
}
