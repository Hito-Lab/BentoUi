import BentoTabs from "../components/BentoTabs.vue";

export default {
  title: "Components/BentoTabs",
  component: BentoTabs,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    tabs: ["Aperçu", "Code", "Settings"],
  },
  render: (args) => ({
    components: { BentoTabs },
    setup() {
      return { args };
    },
    template: `
      <BentoTabs v-bind="args">
        <template #Aperçu>
          <div class="p-6 text-center">
            <i class="ph ph-paint-brush-broad text-4xl text-bento-ao mb-3"></i>
            <p class="text-gray-600 dark:text-gray-300">Le contenu des onglets est dynamique et fluide.</p>
          </div>
        </template>
        <template #Code>
          <div class="bg-gray-900 p-6 text-sm font-mono text-green-400">
            &lt;BentoTabs :tabs="['A', 'B']" /&gt;
          </div>
        </template>
        <template #Settings>
          <div class="p-6">
            <div class="flex items-center justify-between">
              <span class="text-gray-700 dark:text-gray-200">Notifications</span>
              <span class="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">ON</span>
            </div>
          </div>
        </template>
      </BentoTabs>
    `,
  }),
};

export const SimpleTabs = {
  args: {
    tabs: ["Compte", "Sécurité", "Préférences"],
  },
  render: (args) => ({
    components: { BentoTabs },
    setup() {
      return { args };
    },
    template: `
      <BentoTabs v-bind="args">
        <template #Compte>
          <div class="p-6">
            <h3 class="font-semibold mb-2">Informations du compte</h3>
            <p class="text-gray-600">Gérez vos informations personnelles ici.</p>
          </div>
        </template>
        <template #Sécurité>
          <div class="p-6">
            <h3 class="font-semibold mb-2">Paramètres de sécurité</h3>
            <p class="text-gray-600">Configurez vos options de sécurité.</p>
          </div>
        </template>
        <template #Préférences>
          <div class="p-6">
            <h3 class="font-semibold mb-2">Vos préférences</h3>
            <p class="text-gray-600">Personnalisez votre expérience.</p>
          </div>
        </template>
      </BentoTabs>
    `,
  }),
};
