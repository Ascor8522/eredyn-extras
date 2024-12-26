export class BiomeDetails extends Application {
	public static get defaultOptions() {
		return foundry.utils.mergeObject(super.defaultOptions, {
			id: "eredyn-extras-biome-details",
			template: "modules/eredyn-extras/templates/biome-details.hbs",
			title: game.i18n?.localize("EREDYN-EXTRAS.biome-details.title") ?? "Biome",
			popOut: true,
			resizable: true,
			width: 400,
			height: 600,
			scrollY: true,
		});
	}
}
