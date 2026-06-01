import sdkPackage from "../../../packages/factus-js/package.json";

export const SDK_VERSION = sdkPackage.version;

export const SDK_MAJOR_VERSION = `v${SDK_VERSION.split(".")[0]}`;
