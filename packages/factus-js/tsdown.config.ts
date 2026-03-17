import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  clean: true,
  deps: {
    neverBundle: [
      "@factus-js/client",
      "@factus-js/types",
      "@factus-js/constants",
    ],
  },
});
