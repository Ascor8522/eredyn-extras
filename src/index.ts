import { MODULE_ID } from "./constants";
import { BiomeListWindow } from "./view/biome-list";

Handlebars.registerHelper("ifeq", function(this: unknown, a, b, options) {
	if(a == b) { return options.fn(this); }
	return options.inverse(this);
});

Hooks.on("init", () => {
	// @ts-ignore
	game.settings?.register(MODULE_ID, "biome-list-view", {
		type: String,
	});
});

Hooks.on('getSceneControlButtons', controls => {
	controls
		.find(c => c.name === 'token')!
		.tools
		.push({
			name: "list-biomes",
			title: game.i18n?.localize("EREDYN-EXTRAS.biome-list.title") ?? "Biomes",
			icon: "fas fa-tree",
			onClick: () => {
				// TODO: prevent opening multiple windows
				new BiomeListWindow({}).render(true);
			},
			button: true,
		});
});
