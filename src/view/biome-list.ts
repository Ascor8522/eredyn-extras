import type DocumentSheetV2 from "@league-of-foundry-developers/foundry-vtt-types/src/foundry/client-esm/applications/api/document-sheet.mjs";
import type { AnyObject, DeepPartial } from "@league-of-foundry-developers/foundry-vtt-types/src/types/utils.mjs";
import { MODULE_ID } from "../constants";
import { Biome } from "../model/biome";
import { BiomeRepository } from "../repository/biome-repository";
import { BiomeDetails } from "./biome-details";
import { ViewType } from "./view-type";

export class BiomeListWindow extends foundry.applications.api.HandlebarsApplicationMixin(foundry.applications.api.ApplicationV2)<
	BiomeListRenderContext,
	BiomeListConfiguration,
	BiomeListRenderOptions
> {
	public static readonly DEFAULT_OPTIONS: DeepPartial<BiomeListConfiguration> = {
		id: `${MODULE_ID}-biome-list`,
		form: {
			handler: BiomeListWindow.handler,
			closeOnSubmit: false,
		},
		position: {
			width: 1000,
			height: 600,
		},
		tag: "div",
		window: {
			icon: "fas fa-tree",
			title: "EREDYN-EXTRAS.biome-list.title",
			resizable: false,
		},
		actions: {
			"view-mode": BiomeListWindow.viewModeHandler,
			"view": BiomeListWindow.viewHandler,
			"edit": BiomeListWindow.editHandler,
			"delete": BiomeListWindow.deleteHandler,
			"create": BiomeListWindow.createHandler,
		},
	};

	public static readonly PARTS = {
		foo: {
			template: `modules/${MODULE_ID}/templates/biome-list.hbs`,
			classes: [
				"biome-list",
				"standard-form",
			],
		},
	};

	public static handler() {

	}

	public static viewModeHandler(this: BiomeListWindow & foundry.applications.api.ApplicationV2, _event: PointerEvent, element: HTMLElement) {
		const view = element.dataset["value"] as ViewType;
		// @ts-ignore
		game.settings?.set(MODULE_ID, "biome-list-view", view);
		this.render(true);
	}

	public static viewHandler(this: BiomeListWindow & foundry.applications.api.ApplicationV2, event: PointerEvent, element: HTMLElement) {
		const id = element.dataset["id"] as Biome["id"];
		new BiomeDetails({}).render(true);
	}

	public static editHandler(this: BiomeListWindow & foundry.applications.api.ApplicationV2, event: PointerEvent, element: HTMLElement) {
		const id = element.dataset["id"] as Biome["id"];
		new BiomeDetails({}).render(true);
	}

	public static deleteHandler(this: BiomeListWindow & foundry.applications.api.ApplicationV2, event: PointerEvent, element: HTMLElement) {
		const id = element.dataset["id"] as Biome["id"];
		BiomeRepository.getInstance().deleteById(id);
		this.render(true);
	}

	public static createHandler(this: BiomeListWindow & foundry.applications.api.ApplicationV2, event: PointerEvent, element: HTMLElement) {
		new BiomeDetails({}).render(true);
	}


	protected async _prepareContext(options: DeepPartial<BiomeListRenderOptions>): Promise<BiomeListRenderContext> {
		// @ts-ignore
		const view = game.settings?.get(MODULE_ID, "biome-list-view") as ViewType ?? ViewType.GALLERY;
		return {
			biomes: BiomeRepository.getInstance().getAll(),
			view,
		};
	}

	protected _onRender(context: DeepPartial<BiomeListRenderContext>, options: DeepPartial<BiomeListRenderOptions>): void {
		// this.element
		// 	.querySelectorAll<HTMLButtonElement>("button[data-action='view-mode']")
		// 	.forEach(el => el.addEventListener("click", () => this.setViewMode(el.dataset["value"] as ViewType)));
	}
}

interface BiomeListRenderContext extends AnyObject {
	biomes: Biome[];
	view: ViewType;
}

interface BiomeListConfiguration extends DocumentSheetV2.Configuration<foundry.abstract.Document.Any> {

}

interface BiomeListRenderOptions extends DocumentSheetV2.RenderOptions {
}
