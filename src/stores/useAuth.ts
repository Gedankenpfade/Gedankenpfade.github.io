// stores/authStore.ts
import { defineStore } from 'pinia';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import type firebase from 'firebase/compat/app';
import { ref } from 'vue';
import { useUserStore } from './useUsers';

export const useAuthStore = defineStore('auth', () => {
    const currentUser = ref(null as firebase.User | null);
    const error = ref(null as string | null);
    const userStore = useUserStore();

/*     async function register(email: string, password: string) {
      const auth = getAuth();
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        currentUser.value = userCredential.user as firebase.User;
        error.value = null; // Setze den Fehler zurück
      } catch (error) {
        error = (error as Error).message; // Speichere die Fehlermeldung
        console.error("Fehler bei der Registrierung:", error);
      }
    } */

    async function login(email: string, password: string) {
      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        currentUser.value = userCredential.user as firebase.User;
        if (currentUser.value.email) {
          userStore.setLoggedinUser(currentUser.value.uid);
        }
        error.value = null; // Setze den Fehler zurück
      } catch (error) {
        error = (error as Error).message; // Speichere die Fehlermeldung
        console.error("Fehler bei der Anmeldung:", error);
      }
    }

    async function logout() {
      const auth = getAuth();
      try {
        await signOut(auth);
        currentUser.value = null; // Setze den Nutzer zurück
        userStore.unsetLoggedinUser();
        error.value = null; // Setze den Fehler zurück
      } catch (error) {
        error = (error as Error).message; // Speichere die Fehlermeldung
        console.error("Fehler bei der Abmeldung:", error);
      }
    }

    return {
        /* register, */
        login,
        logout,
        error,
        currentUser
    }
});
