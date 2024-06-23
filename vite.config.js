import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@components": "/src/components",
			"@api": "/src/api",
			"@utils": "/src/utils/",
			"@contexts": "/src/contexts",
			"@urls": "/src/constants/urls.js",
			"@actions": "/src/redux/actions/",
			"@reducers": "/src/redux/reducers/",
			"@store": "/src/redux/store.js",
			"@types": "/src/constants/ActionTypes.js",
		},
	},
});
