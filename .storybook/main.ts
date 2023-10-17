import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";

const config: StorybookConfig = {
    framework: "@storybook/react-vite",
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    async viteFinal(config) {
        // Merge custom configuration into the default config
        return mergeConfig(config, {
            // Add dependencies to pre-optimization
            optimizeDeps: {
                include: ["storybook-dark-mode"],
            },
        });
    },
};
export default config;
