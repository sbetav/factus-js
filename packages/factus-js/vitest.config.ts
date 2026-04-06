import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    globals: true,
    include: ["src/__tests__/**/*.test.ts", "src/__tests__/**/*.test-d.ts"],
    testTimeout: 120000,
    hookTimeout: 120000,
    fileParallelism: false,
    // Automatically restore vi.stubGlobal() and vi.spyOn() after each test
    unstubGlobals: true,
    clearMocks: true,
    typecheck: {
      include: ["src/__tests__/**/*.test-d.ts"],
    },
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts"],
      exclude: [
        "src/__tests__/**",
        "src/types/**",
        "**/*.d.ts",
        "src/constants-info.ts",
      ],
      reporter: ["text", "lcov"],
      all: true,
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 65,
        statements: 70,
      },
    },
  },
});
