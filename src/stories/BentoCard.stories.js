import BentoCard from "../components/BentoCard.vue";

export default {
  title: "Components/BentoCard",
  component: BentoCard,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    title: "Card Title",
  },
  render: (args) => ({
    components: { BentoCard },
    setup() {
      return { args };
    },
    template: `
      <BentoCard v-bind="args">
        <p class="text-gray-600">Voici le contenu de la carte. Le design est minimal et élégant.</p>
      </BentoCard>
    `,
  }),
};

export const NoPadding = {
  args: {
    noPadding: true,
  },
  render: (args) => ({
    components: { BentoCard },
    setup() {
      return { args };
    },
    template: `
      <BentoCard v-bind="args">
        <img src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=800" class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="font-semibold mb-2">Image avec contenu</h3>
          <p class="text-gray-600 text-sm">Carte sans padding pour les images plein format.</p>
        </div>
      </BentoCard>
    `,
  }),
};

export const WithStats = {
  render: () => ({
    components: { BentoCard },
    template: `
      <div class="grid grid-cols-3 gap-4">
        <BentoCard title="Users">
          <p class="text-3xl font-bold text-bento-ao">1,234</p>
          <p class="text-sm text-gray-500 mt-1">+12% ce mois</p>
        </BentoCard>
        <BentoCard title="Revenue">
          <p class="text-3xl font-bold text-green-600">$45.2K</p>
          <p class="text-sm text-gray-500 mt-1">+8% ce mois</p>
        </BentoCard>
        <BentoCard title="Tasks">
          <p class="text-3xl font-bold text-bento-sakura">89</p>
          <p class="text-sm text-gray-500 mt-1">23 complétées</p>
        </BentoCard>
      </div>
    `,
  }),
};
