import { BiomeListWindow } from "./biome-list";

export const MODULE_ID = "eredyn-extras";



Hooks.on('getSceneControlButtons', controls => {
	controls
		.find(c => c.name === 'token')!
		.tools
		.push({
			name: "list-biomes",
			title: game.i18n?.localize("EREDYN-EXTRAS.biome-list.title") ?? "Biomes",
			icon: "fas fa-tree",
			onClick: () => new BiomeListWindow().render(true),
			button: true,
		});
});
