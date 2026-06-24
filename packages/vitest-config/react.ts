import { mergeConfig, defineConfig } from "vitest/config";
import { baseConfig } from "./base";

export const reactConfig = mergeConfig(
  baseConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      setupFiles: ["./vitest.setup.ts"],
    },
  }),
);
