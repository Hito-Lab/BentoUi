import { ref } from "vue";

export function useDarkMode() {
  const isDark = ref(false);

  const toggleTheme = () => {
    isDark.value = !isDark.value;

    // Ajouter/retirer la classe 'dark' sur l'élément html
    if (isDark.value) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const initTheme = () => {
    // Vérifier le thème sauvegardé
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    isDark.value = savedTheme === "dark" || (!savedTheme && prefersDark);

    if (isDark.value) {
      document.documentElement.classList.add("dark");
    }
  };

  return {
    isDark,
    toggleTheme,
    initTheme,
  };
}
