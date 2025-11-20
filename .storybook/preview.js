import { setup } from "@storybook/vue3";
import "../src/styles/main.css";

// Configuration globale Storybook
setup((app) => {
  // Vous pouvez ajouter des plugins globaux ici si nécessaire
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "#F3F4F6" },
      { name: "dark", value: "#1F2937" },
      { name: "white", value: "#FFFFFF" },
    ],
  },
};
