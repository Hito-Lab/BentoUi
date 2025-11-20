# BentoUI 🍱

> Minimalist Component Kit inspired by Japanese Design

BentoUI est une bibliothèque de composants Vue 3 moderne, élégante et minimaliste, inspirée par le design japonais et la philosophie du _Bento_.

## 🎨 Philosophie

- **Minimalisme** : Chaque composant est pensé pour être simple et épuré
- **Design japonais** : Palette de couleurs inspirée (Ao, Sakura, Kuro)
- **Accessibilité** : Composants accessibles et sémantiques
- **Performance** : Construit avec Vue 3 et optimisé avec Tailwind CSS

## 📦 Installation

```bash
npm install bentoui
# ou
yarn add bentoui
# ou
pnpm add bentoui
```

## 🚀 Démarrage rapide

### 1. Importer les styles

Dans votre fichier principal (`main.js` ou `main.ts`) :

```javascript
import { createApp } from "vue";
import App from "./App.vue";

// Importer les styles BentoUI
import "bentoui/dist/style.css";

createApp(App).mount("#app");
```

### 2. Configurer Tailwind CSS

Ajoutez BentoUI à votre `tailwind.config.js` :

```javascript
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/bentoui/**/*.{vue,js,ts,jsx,tsx}", // Ajouter BentoUI
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bento: {
          ao: "#6C8EAD",
          sakura: "#FFD1DC",
          kuro: "#2C2C2C",
          shiro: "#F9FAFB",
          accent: "#88B04B",
        },
      },
    },
  },
};
```

### 3. Utiliser les composants

```vue
<script setup>
import { BentoButton, BentoCard, BentoInput } from "bentoui";
import { ref } from "vue";

const email = ref("");
</script>

<template>
  <BentoCard title="Connexion">
    <BentoInput
      v-model="email"
      type="email"
      label="Email"
      icon="envelope"
      placeholder="exemple@bento.ui"
    />
    <BentoButton variant="primary" class="mt-4"> Se connecter </BentoButton>
  </BentoCard>
</template>
```

## 🧩 Composants disponibles

### BentoButton

Bouton avec plusieurs variantes et états.

```vue
<BentoButton variant="primary">Action</BentoButton>
<BentoButton variant="secondary">Secondaire</BentoButton>
<BentoButton variant="outline">Outline</BentoButton>
<BentoButton variant="ghost">Ghost</BentoButton>
<BentoButton variant="sakura" icon="heart">Sakura</BentoButton>
<BentoButton variant="primary" loading>Chargement...</BentoButton>
```

**Props :**

- `variant`: `'primary' | 'secondary' | 'outline' | 'ghost' | 'sakura'`
- `loading`: `boolean`
- `disabled`: `boolean`
- `icon`: `string` (nom de l'icône Phosphor)

### BentoInput

Input avec label, icône et gestion d'erreur.

```vue
<BentoInput
  v-model="name"
  label="Nom complet"
  placeholder="Entrez votre nom..."
  icon="user"
  error="Ce champ est requis"
/>
```

**Props :**

- `modelValue`: `string | number`
- `label`: `string`
- `placeholder`: `string`
- `type`: `'text' | 'email' | 'password' | 'number' | 'tel'`
- `icon`: `string`
- `error`: `string`
- `disabled`: `boolean`

### BentoCard

Carte conteneur avec bordures arrondies et ombre.

```vue
<BentoCard title="Mon titre">
  <p>Contenu de la carte...</p>
</BentoCard>

<BentoCard no-padding>
  <img src="..." class="w-full" />
</BentoCard>
```

**Props :**

- `title`: `string`
- `noPadding`: `boolean`

### BentoBadge

Badge de statut coloré.

```vue
<BentoBadge variant="default">Default</BentoBadge>
<BentoBadge variant="info">New</BentoBadge>
<BentoBadge variant="success">Completed</BentoBadge>
<BentoBadge variant="warning">Pending</BentoBadge>
<BentoBadge variant="error">Failed</BentoBadge>
```

**Props :**

- `variant`: `'default' | 'info' | 'success' | 'warning' | 'error'`

### BentoTabs

Système d'onglets avec slots nommés.

```vue
<BentoTabs :tabs="['Compte', 'Sécurité', 'Préférences']">
  <template #Compte>
    <div>Contenu compte...</div>
  </template>
  <template #Sécurité>
    <div>Contenu sécurité...</div>
  </template>
  <template #Préférences>
    <div>Contenu préférences...</div>
  </template>
</BentoTabs>
```

**Props :**

- `tabs`: `string[]`

### BentoModal

Modale avec overlay et animations.

```vue
<script setup>
import { ref } from "vue";
const showModal = ref(false);
</script>

<template>
  <BentoButton @click="showModal = true">Ouvrir</BentoButton>

  <BentoModal :show="showModal" @close="showModal = false" title="Confirmation">
    <p>Contenu de la modale...</p>
    <div class="flex justify-end gap-3 mt-6">
      <BentoButton variant="ghost" @click="showModal = false">
        Annuler
      </BentoButton>
      <BentoButton variant="primary" @click="showModal = false">
        Confirmer
      </BentoButton>
    </div>
  </BentoModal>
</template>
```

**Props :**

- `show`: `boolean`
- `title`: `string`

**Events :**

- `@close`: Émis lors de la fermeture

### BentoToastContainer

Système de notifications toast.

```vue
<!-- Dans App.vue (une seule fois) -->
<script setup>
import { BentoToastContainer } from "bentoui";
</script>

<template>
  <div id="app">
    <!-- Votre application -->
    <BentoToastContainer />
  </div>
</template>
```

```vue
<!-- Dans un composant -->
<script setup>
import { useToast } from "bentoui";

const { addToast } = useToast();

function handleSuccess() {
  addToast("Opération réussie !", "success");
}

function handleError() {
  addToast("Une erreur est survenue", "error");
}
</script>
```

## 🎭 Composables

### useToast

```javascript
import { useToast } from "bentoui";

const { addToast, toasts, removeToast } = useToast();

// Ajouter un toast
addToast("Message de succès", "success");
addToast("Message d'erreur", "error");
```

### useDarkMode

```javascript
import { useDarkMode } from "bentoui";

const { isDark, toggleTheme, initTheme } = useDarkMode();

// Initialiser le thème (à faire au montage de l'app)
initTheme();

// Toggle dark mode
toggleTheme();
```

## 🎨 Palette de couleurs

BentoUI utilise une palette inspirée du Japon :

- **Ao** (`#6C8EAD`) : Bleu sourd japonais
- **Sakura** (`#FFD1DC`) : Rose fleur de cerisier
- **Kuro** (`#2C2C2C`) : Noir doux
- **Shiro** (`#F9FAFB`) : Blanc cassé
- **Accent** (`#88B04B`) : Vert Matcha

## 🔧 Développement

```bash
# Installation des dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Lancer Storybook
npm run storybook

# Build pour production
npm run build
```

## 📚 Storybook

BentoUI inclut Storybook pour explorer et tester tous les composants :

```bash
npm run storybook
```

Ouvrez [http://localhost:6006](http://localhost:6006) pour voir la documentation interactive.

## 🌙 Mode sombre

BentoUI supporte nativement le mode sombre avec Tailwind CSS :

```vue
<script setup>
import { useDarkMode } from "bentoui";

const { isDark, toggleTheme, initTheme } = useDarkMode();

// Initialiser au montage
onMounted(() => {
  initTheme();
});
</script>

<template>
  <div :class="{ dark: isDark }">
    <BentoButton @click="toggleTheme">
      {{ isDark ? "Mode Clair" : "Mode Sombre" }}
    </BentoButton>
  </div>
</template>
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT © 2023 BentoUI

## 🙏 Remerciements

- [Vue 3](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Phosphor Icons](https://phosphoricons.com/)
- Design inspiré par la culture japonaise et le minimalisme

---

Fait avec ❤️ et inspiration japonaise 🍱
