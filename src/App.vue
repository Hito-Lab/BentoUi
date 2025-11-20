<script setup>
import { reactive, ref, onMounted } from "vue";
import {
  BentoButton,
  BentoCard,
  BentoInput,
  BentoBadge,
  BentoTabs,
  BentoModal,
  BentoToastContainer,
} from "./components";
import { useToast, useDarkMode } from "./composables";

const { addToast } = useToast();
const { isDark, toggleTheme, initTheme } = useDarkMode();

const showModal = ref(false);
const form = reactive({
  name: "",
  email: "",
  error: "",
});

onMounted(() => {
  initTheme();
});

const triggerToast = (type) => {
  if (type === "success") addToast("Opération réussie avec style !", "success");
  if (type === "error") addToast("Une erreur est survenue.", "error");
};

const confirmModal = () => {
  showModal.value = false;
  addToast("Action confirmée", "success");
};

const showGithubToast = () => {
  addToast("Redirection vers GitHub...", "success");
};
</script>

<template>
  <div :class="{ dark: isDark }">
    <div
      class="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 p-6 md:p-12"
    >
      <!-- Header -->
      <header
        class="max-w-7xl mx-auto mb-12 flex justify-between items-center animate-fade-in"
      >
        <div>
          <h1
            class="text-4xl font-bold tracking-tight text-bento-kuro dark:text-white mb-2"
          >
            Bento<span class="text-bento-ao">UI</span>
          </h1>
          <p class="text-gray-500 dark:text-gray-400">
            Minimalist Component Kit inspired by Japanese Design.
          </p>
        </div>
        <div class="flex gap-4 items-center">
          <bento-button variant="ghost" @click="toggleTheme" icon="moon">
            {{ isDark ? "Mode Clair" : "Mode Sombre" }}
          </bento-button>
          <bento-button
            variant="primary"
            @click="showGithubToast"
            icon="github-logo"
          >
            GitHub
          </bento-button>
        </div>
      </header>

      <!-- Grid Showcase (Bento Box Layout) -->
      <main class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        <!-- Section 1: Buttons & Inputs -->
        <bento-card
          title="Interactions"
          class="md:col-span-8 animate-slide-up"
          style="animation-delay: 0.1s"
        >
          <div class="space-y-8">
            <!-- Buttons -->
            <div>
              <h3
                class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4"
              >
                Boutons
              </h3>
              <div class="flex flex-wrap gap-4 items-center">
                <bento-button variant="primary">Primary Action</bento-button>
                <bento-button variant="secondary">Secondary</bento-button>
                <bento-button variant="outline">Outline</bento-button>
                <bento-button variant="ghost">Ghost</bento-button>
                <bento-button variant="primary" loading>Loading</bento-button>
                <bento-button variant="sakura" icon="heart"
                  >Sakura</bento-button
                >
              </div>
            </div>

            <!-- Inputs -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3
                  class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4"
                >
                  Inputs
                </h3>
                <div class="space-y-4">
                  <bento-input
                    v-model="form.name"
                    placeholder="Votre nom complet"
                    label="Nom"
                  ></bento-input>
                  <bento-input
                    v-model="form.email"
                    type="email"
                    placeholder="exemple@bento.ui"
                    label="Email"
                    icon="envelope"
                  ></bento-input>
                </div>
              </div>
              <div>
                <h3
                  class="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4"
                >
                  States
                </h3>
                <div class="space-y-4">
                  <bento-input
                    placeholder="Disabled input"
                    label="Désactivé"
                    disabled
                  ></bento-input>
                  <bento-input
                    v-model="form.error"
                    placeholder="Erreur..."
                    label="Validation"
                    error="Ce champ est requis"
                  ></bento-input>
                </div>
              </div>
            </div>
          </div>
        </bento-card>

        <!-- Section 2: Badges & Toggles -->
        <bento-card
          title="Status & Tags"
          class="md:col-span-4 animate-slide-up"
          style="animation-delay: 0.2s"
        >
          <div class="space-y-6">
            <div>
              <label
                class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3"
                >Badges</label
              >
              <div class="flex flex-wrap gap-2">
                <bento-badge variant="default">Default</bento-badge>
                <bento-badge variant="info">New</bento-badge>
                <bento-badge variant="success">Completed</bento-badge>
                <bento-badge variant="warning">Pending</bento-badge>
                <bento-badge variant="error">Failed</bento-badge>
              </div>
            </div>

            <div
              class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-dashed border-gray-200 dark:border-gray-700"
            >
              <p class="text-xs text-gray-500 mb-2">Avatar Group</p>
              <div class="flex -space-x-2 overflow-hidden">
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-900"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  alt=""
                />
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-900"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                  alt=""
                />
                <img
                  class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-900"
                  src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                  alt=""
                />
                <div
                  class="h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-900 bg-bento-ao flex items-center justify-center text-white text-xs font-bold"
                >
                  +3
                </div>
              </div>
            </div>
          </div>
        </bento-card>

        <!-- Section 3: Tabs & Navigation -->
        <bento-card
          class="md:col-span-6 animate-slide-up"
          style="animation-delay: 0.3s"
          no-padding
        >
          <bento-tabs :tabs="['Aperçu', 'Code', 'Settings']">
            <template #Aperçu>
              <div class="p-6 text-center py-12">
                <i
                  class="ph ph-paint-brush-broad text-4xl text-bento-ao mb-3"
                ></i>
                <p class="text-gray-600 dark:text-gray-300">
                  Le contenu des onglets est dynamique et fluide.
                </p>
              </div>
            </template>
            <template #Code>
              <div
                class="bg-gray-900 p-6 text-sm font-mono text-green-400 overflow-x-auto"
              >
                &lt;BentoTabs :tabs="['A', 'B']" /&gt;
              </div>
            </template>
            <template #Settings>
              <div class="p-6">
                <div class="flex items-center justify-between">
                  <span class="text-gray-700 dark:text-gray-200"
                    >Notifications</span
                  >
                  <bento-badge variant="success">ON</bento-badge>
                </div>
              </div>
            </template>
          </bento-tabs>
        </bento-card>

        <!-- Section 4: Feedback & Modals -->
        <bento-card
          title="Feedback"
          class="md:col-span-6 animate-slide-up"
          style="animation-delay: 0.4s"
        >
          <div class="grid grid-cols-2 gap-4 h-full content-center">
            <bento-button
              variant="outline"
              @click="triggerToast('success')"
              class="w-full"
            >
              Toast Succès
            </bento-button>
            <bento-button
              variant="outline"
              @click="triggerToast('error')"
              class="w-full"
            >
              Toast Erreur
            </bento-button>
            <bento-button
              variant="primary"
              @click="showModal = true"
              class="col-span-2"
            >
              Ouvrir Modal
            </bento-button>
          </div>
        </bento-card>
      </main>

      <!-- Footer -->
      <footer class="max-w-7xl mx-auto mt-12 text-center text-gray-400 text-sm">
        <p>BentoUI © 2023 — Construit avec Vue 3 & Tailwind</p>
      </footer>

      <!-- Global Components -->
      <bento-toast-container></bento-toast-container>

      <bento-modal
        :show="showModal"
        @close="showModal = false"
        title="Confirmation"
      >
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          Voulez-vous vraiment effectuer cette action ? Le design minimaliste
          implique de prendre des décisions réfléchies.
        </p>
        <div class="flex justify-end gap-3">
          <bento-button variant="ghost" @click="showModal = false"
            >Annuler</bento-button
          >
          <bento-button variant="primary" @click="confirmModal"
            >Confirmer</bento-button
          >
        </div>
      </bento-modal>
    </div>
  </div>
</template>
