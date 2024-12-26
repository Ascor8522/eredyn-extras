import { Options } from "tsup";

const config: Options = {
	bundle: true,
	splitting: false,
	target: "esnext",
	format: "esm",
	minify: false,
	entry: [
		"src/index.ts",
	],
	outDir: "scripts",
	// watch: ["src"],
};

export default config;
