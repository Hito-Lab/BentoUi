import BentoInput from "../components/BentoInput.vue";
import { ref } from "vue";

export default {
  title: "Components/BentoInput",
  component: BentoInput,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "password", "number", "tel"],
      description: "Type d'input HTML",
    },
    icon: {
      control: "text",
      description: "Icône Phosphor (sans le préfixe ph-)",
    },
    disabled: {
      control: "boolean",
    },
    error: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    label: "Nom complet",
    placeholder: "Entrez votre nom...",
  },
  render: (args) => ({
    components: { BentoInput },
    setup() {
      const value = ref("");
      return { args, value };
    },
    template: '<BentoInput v-bind="args" v-model="value" />',
  }),
};

export const WithIcon = {
  args: {
    label: "Email",
    placeholder: "exemple@bento.ui",
    icon: "envelope",
    type: "email",
  },
  render: (args) => ({
    components: { BentoInput },
    setup() {
      const value = ref("");
      return { args, value };
    },
    template: '<BentoInput v-bind="args" v-model="value" />',
  }),
};

export const WithError = {
  args: {
    label: "Mot de passe",
    placeholder: "Minimum 8 caractères",
    type: "password",
    error: "Ce champ est requis",
  },
  render: (args) => ({
    components: { BentoInput },
    setup() {
      const value = ref("");
      return { args, value };
    },
    template: '<BentoInput v-bind="args" v-model="value" />',
  }),
};

export const Disabled = {
  args: {
    label: "Champ désactivé",
    placeholder: "Non modifiable",
    disabled: true,
  },
  render: (args) => ({
    components: { BentoInput },
    setup() {
      const value = ref("Valeur verrouillée");
      return { args, value };
    },
    template: '<BentoInput v-bind="args" v-model="value" />',
  }),
};
