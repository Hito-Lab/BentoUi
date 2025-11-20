import BentoBadge from "../components/BentoBadge.vue";

export default {
  title: "Components/BentoBadge",
  component: BentoBadge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "info", "success", "warning", "error"],
      description: "Variant de couleur du badge",
    },
  },
};

export const Default = {
  args: {
    variant: "default",
  },
  render: (args) => ({
    components: { BentoBadge },
    setup() {
      return { args };
    },
    template: '<BentoBadge v-bind="args">Default</BentoBadge>',
  }),
};

export const Info = {
  args: {
    variant: "info",
  },
  render: (args) => ({
    components: { BentoBadge },
    setup() {
      return { args };
    },
    template: '<BentoBadge v-bind="args">New</BentoBadge>',
  }),
};

export const Success = {
  args: {
    variant: "success",
  },
  render: (args) => ({
    components: { BentoBadge },
    setup() {
      return { args };
    },
    template: '<BentoBadge v-bind="args">Completed</BentoBadge>',
  }),
};

export const Warning = {
  args: {
    variant: "warning",
  },
  render: (args) => ({
    components: { BentoBadge },
    setup() {
      return { args };
    },
    template: '<BentoBadge v-bind="args">Pending</BentoBadge>',
  }),
};

export const Error = {
  args: {
    variant: "error",
  },
  render: (args) => ({
    components: { BentoBadge },
    setup() {
      return { args };
    },
    template: '<BentoBadge v-bind="args">Failed</BentoBadge>',
  }),
};

export const AllVariants = {
  render: () => ({
    components: { BentoBadge },
    template: `
      <div class="flex flex-wrap gap-2">
        <BentoBadge variant="default">Default</BentoBadge>
        <BentoBadge variant="info">Info</BentoBadge>
        <BentoBadge variant="success">Success</BentoBadge>
        <BentoBadge variant="warning">Warning</BentoBadge>
        <BentoBadge variant="error">Error</BentoBadge>
      </div>
    `,
  }),
};
