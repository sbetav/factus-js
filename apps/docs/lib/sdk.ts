import sdkPackage from "../../../packages/factus-js/package.json";

export const SDK_VERSION = sdkPackage.version;

export const SDK_MAJOR_VERSION = `v${SDK_VERSION.split(".")[0]}`;

const PACKAGE_NAME = "factus-js";

export const installCommands = [
  { id: "npm", cmd: `npm install ${PACKAGE_NAME}@${SDK_VERSION}` },
  { id: "yarn", cmd: `yarn add ${PACKAGE_NAME}@${SDK_VERSION}` },
  { id: "pnpm", cmd: `pnpm add ${PACKAGE_NAME}@${SDK_VERSION}` },
  { id: "bun", cmd: `bun add ${PACKAGE_NAME}@${SDK_VERSION}` },
] as const;
