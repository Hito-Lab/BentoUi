import BentoButton from "../components/BentoButton.vue";

export default {
  title: "Components/BentoButton",
  component: BentoButton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "sakura"],
      description: "Style variant du bouton",
    },
    loading: {
      control: "boolean",
      description: "État de chargement",
    },
    disabled: {
      control: "boolean",
      description: "État désactivé",
    },
    icon: {
      control: "text",
      description: "Icône Phosphor (sans le préfixe ph-)",
    },
  },
};

export const Primary = {
  args: {
    variant: "primary",
  },
  render: (args) => ({
    components: { BentoButton },
    setup() {
      return { args };
    },
    template: '<BentoButton v-bind="args">Primary Button</BentoButton>',
  }),
};

export const Secondary = {
  args: {
    variant: "secondary",
  },
  render: (args) => ({
    components: { BentoButton },
    setup() {
      return { args };
    },
    template: '<BentoButton v-bind="args">Secondary Button</BentoButton>',
  }),
};

export const Outline = {
  args: {
    variant: "outline",
  },
  render: (args) => ({
    components: { BentoButton },
    setup() {
      return { args };
    },
    template: '<BentoButton v-bind="args">Outline Button</BentoButton>',
  }),
};

export const Ghost = {
  args: {
    variant: "ghost",
  },
  render: (args) => ({
    components: { BentoButton },
    setup() {
      return { args };
    },
    template: '<BentoButton v-bind="args">Ghost Button</BentoButton>',
  }),
};

export const Sakura = {
  args: {
    variant: "sakura",
    icon: "heart",
  },
  render: (args) => ({
    components: { BentoButton },
    setup() {
      return { args };
    },
    template: '<BentoButton v-bind="args">Sakura Button</BentoButton>',
  }),
};

export const WithIcon = {
  args: {
    variant: "primary",
    icon: "github-logo",
  },
  render: (args) => ({
    components: { BentoButton },
    setup() {
      return { args };
    },
    template: '<BentoButton v-bind="args">GitHub</BentoButton>',
  }),
};

export const Loading = {
  args: {
    variant: "primary",
    loading: true,
  },
  render: (args) => ({
    components: { BentoButton },
    setup() {
      return { args };
    },
    template: '<BentoButton v-bind="args">Loading...</BentoButton>',
  }),
};

export const Disabled = {
  args: {
    variant: "primary",
    disabled: true,
  },
  render: (args) => ({
    components: { BentoButton },
    setup() {
      return { args };
    },
    template: '<BentoButton v-bind="args">Disabled</BentoButton>',
  }),
};
