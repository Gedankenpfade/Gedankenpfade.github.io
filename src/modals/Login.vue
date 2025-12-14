<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/useAuth';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');

const emit = defineEmits<{
    (e: 'closeModal'): void;
}>();

// Fehlerbehandlung
const error = authStore.error;
/* const registration = ref(false) */

// Funktionen zur Registrierung, Anmeldung und Abmeldung
/* const register = () => {
  authStore.register(email.value, password.value);
}; */

function login() {
    authStore.login(email.value, password.value);
    console.log("logged in")
    emit('closeModal')
}
</script>

<template>
    <div class="login-register modal-overlay">
        <div class="login-modal">
            <!-- <div v-if="registration" class="registration">
                <h2>Registrierung</h2>
                <input v-model="email" placeholder="E-Mail" />
                <input v-model="password" type="password" placeholder="Passwort" />
                <button @click="register">Registrieren</button>
                <p v-if="error">{{ error }}</p>
                
                <p @click="registration = false">Schon registriert? -> Login</p>
            </div> -->
            <div class="login">
                <h2>Login</h2>
                <input v-model="email" placeholder="E-Mail" />
                <input v-model="password" type="password" placeholder="Passwort" />
                <button @click="login">Anmelden</button>
                <p v-if="error">{{ error }}</p>
                <!-- <p @click="registration = true">Neu hier? -> Registrieren</p> -->
            </div>

            <button @click="emit('closeModal')">Abbrechen</button>
      </div>
    </div>
</template>

<style scoped>
.login-modal {
    width: 50vh;
    height: fit-content;
    background-color: beige;

    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    @media screen and (min-width: 2000px) {
        width: 30%;
        min-height: 50vh;
        max-height: 80vh;
    }
}
</style>