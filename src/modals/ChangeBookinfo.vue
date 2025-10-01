<script setup lang="ts">
import { inject, ref } from 'vue';
// import type { Book } from '../types/book';

const emit = defineEmits<{
    (e: 'closeModal'): void;
}>();

// const bookToChange = inject('bookToChange') as Book

const categories = ref(["Queer", "Fanfiction", "Autismus", "Anderes"])

const titleInput = ref("Titel")
const descriptionInput = ref("Beschreibungstext bla bla bla")
const showError = ref(false);

function checkInput() {
    //console.log("injected: ", bookToChange)
    console.log("Eingaben werden überprüft...")
    emit('closeModal');
}
</script>

<template>
    <div class="changeBookinfo modal-overlay">
        <div class="modal" >
            <h2>Buch bearbeiten</h2>

            <p>Diese Funktion gibt es noch nicht. Komm bitte später wieder.</p>
            <!-- <div class="inputline">
                <p>Buchtitel:</p>
                <input type="text" v-model="titleInput"></input>
            </div>
            <div class="inputline">
                <p>Klappentext / Beschreibung:</p>
                <input type="textfield" v-model="descriptionInput"></input>
            </div>
            <div class="inputline">
                <p>Kategorie:</p>
                <select name="category" id="category">
                    <option v-for="k in categories" :value="k">{{ k }}</option>
                </select>
            </div>
            <div class="inputline">
                <p>Coverbild: </p>
                
            </div> -->

            <p v-if="showError" class="error">Nutzername oder Passwort falsch!</p>

            <div class="buttons-group">
                <button @click="$emit('closeModal')">Abbrechen</button>
                <button @click="checkInput()">Änderungen speichern</button>
            </div>
      </div>
    </div>
</template>