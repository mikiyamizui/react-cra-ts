import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  testMatch: ["**/*.test.[jt]s?(x)"],
  transform: {
    "^.+\\.(ts|tsx)": "ts-jest",
    "\\.(css|scss|svg)$": "<rootDir>/fileTransformer.js",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
};

export default config;
