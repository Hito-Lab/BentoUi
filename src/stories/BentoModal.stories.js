import BentoModal from "../components/BentoModal.vue";
import BentoButton from "../components/BentoButton.vue";
import { ref } from "vue";

export default {
  title: "Components/BentoModal",
  component: BentoModal,
  tags: ["autodocs"],
};

export const Default = {
  render: () => ({
    components: { BentoModal, BentoButton },
    setup() {
      const showModal = ref(false);
      return { showModal };
    },
    template: `
      <div>
        <BentoButton @click="showModal = true">Ouvrir Modal</BentoButton>
        
        <BentoModal :show="showModal" @close="showModal = false" title="Confirmation">
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Voulez-vous vraiment effectuer cette action ? Le design minimaliste implique de prendre des décisions réfléchies.
          </p>
          <div class="flex justify-end gap-3">
            <BentoButton variant="ghost" @click="showModal = false">Annuler</BentoButton>
            <BentoButton variant="primary" @click="showModal = false">Confirmer</BentoButton>
          </div>
        </BentoModal>
      </div>
    `,
  }),
};

export const WithForm = {
  render: () => ({
    components: { BentoModal, BentoButton },
    setup() {
      const showModal = ref(false);
      return { showModal };
    },
    template: `
      <div>
        <BentoButton variant="primary" @click="showModal = true">Nouveau contact</BentoButton>
        
        <BentoModal :show="showModal" @close="showModal = false" title="Ajouter un contact">
          <div class="space-y-4 mb-6">
            <input type="text" placeholder="Nom complet" class="w-full px-4 py-2 border rounded-lg" />
            <input type="email" placeholder="Email" class="w-full px-4 py-2 border rounded-lg" />
            <textarea placeholder="Message..." class="w-full px-4 py-2 border rounded-lg" rows="3"></textarea>
          </div>
          <div class="flex justify-end gap-3">
            <BentoButton variant="ghost" @click="showModal = false">Annuler</BentoButton>
            <BentoButton variant="primary" @click="showModal = false">Enregistrer</BentoButton>
          </div>
        </BentoModal>
      </div>
    `,
  }),
};
