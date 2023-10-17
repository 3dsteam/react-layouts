import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { name } from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
    },
    build: {
        lib: {
            entry: "./src/index.ts",
            name: name, // From package.json
            formats: ["es", "cjs"],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            output: {
                sourcemap: true,
            },
            external: ["react", "react-dom"],
            plugins: [resolve(), typescript()],
        },
    },
    resolve: {
        dedupe: ["react", "react-dom"],
    },
});
