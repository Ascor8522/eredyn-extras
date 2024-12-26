import { MODULE_ID } from "../constants";

export class BiomeDetails extends FormApplication {
	public static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			id: `${MODULE_ID}-biome-details`,
			template: `modules/${MODULE_ID}/templates/biome-details.hbs`,
			title: game.i18n?.localize("EREDYN-EXTRAS.biome-details.title") ?? "Biome",
			popOut: true,
			resizable: true,
			width: 400,
			height: 600,
			scrollY: true,
		});
	}

	protected _updateObject(event: Event, formData?: object): Promise<unknown> {
		throw new Error("Method not implemented.");
	}
}
