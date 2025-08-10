import { createModuleFederationConfig } from "@module-federation/rsbuild-plugin";
import path from "node:path";

export default createModuleFederationConfig({
	name: "mf_consumer",
	remotes: {
		// 'provider': 'rslib_provider@https://unpkg.com/module-federation-rslib-provider@latest/dist/mf/mf-manifest.json',
		provider: "rslib_provider@http://localhost:3001/mf-manifest.json",
	},
	shareStrategy: "loaded-first",
	shared: {
		react: { singleton: true },
		"react-dom": { singleton: true },
	},
	runtimePlugins: [
		path.join(__dirname, "./src/runtime-plugin/retry.ts"),
		path.join(__dirname, "./src/runtime-plugin/fallback.ts"),
	],
});
