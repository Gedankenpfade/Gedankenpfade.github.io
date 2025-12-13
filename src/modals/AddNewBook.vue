<script setup lang="ts">
import { ref } from 'vue';
import type { Book, Chapter } from '../types/book';
import { useBooksStore } from '../stores/useBooks';
import { useUserStore } from '../stores/useUsers';

const userStore = useUserStore()
const bookStore = useBooksStore();

const emit = defineEmits<{
    (e: 'closeModal'): void;
}>();

const categories = ref(["Autismus",  "Fanfiction", "Glaskind", "Queer", "Anderes"])

const showError = ref(false);
const error = ref([] as String[])

const newBook = ref({
    title: "",
    author: "",
    description: "",
    category: "",
    id: -1,
    content: [] as Chapter[],
    createdBy: ''
} as Book)

const currentID = ref(1)
const newChapter = ref({
    title: '',
    content: '',
    id: currentID.value,
} as Chapter)

function checkInput() {
    error.value = []
    showError.value = false
    if (userStore.loggedinUser) {
        // Buch-Check
        if (newBook.value.title == "") {
            error.value.push("Du musst einen Titel eingeben")
            showError.value = true
        }
        if (newBook.value.category == "") {
            error.value.push("Du musst eine Kategorie auswählen!")
            showError.value = true
        }

        newBook.value.createdBy = userStore.loggedinUser.username.toString();
        if (newBook.value.author == "") {
            newBook.value.author = userStore.loggedinUser.username.toString();
        }

        // Kapitel-Check
        if (newChapter.value.title == "") {
            newChapter.value.title = "Kapitel " + currentID.value;
        }
        if (newChapter.value.content == "") {
            error.value.push("Das Kapitel muss etwas enthalten!")
            showError.value = true;
        }
        newBook.value.content.push(newChapter.value)


    } else {
        error.value.push("Kein Nutzer eingeloggt")
        showError.value = true;
    }

    if (!showError.value) {
        console.log("Buch: ", newBook.value);
        bookStore.addNewBook(newBook.value)
        emit("closeModal");
    }
}
</script>

<template>
    <div class="addNewBook modal-overlay">
        <div class="modal" >
            <h2>Buch hinzufügen</h2>
            <div class="input">
                <div>
                    <label>Buchtitel: </label>
                    <input type="text" v-model="newBook.title"></input>
                </div>

                <div>
                    <label>Kategorie: </label>
                    <select name="category" id="category" v-model="newBook.category">
                        <option v-for="k in categories" :value="k">{{ k }}</option>
                    </select>
                </div>
            </div>

            <div class="autor">
                    <label>Autor: </label>
                    <input type="textfield" v-model="newBook.author"></input>
                </div>

            <div class="area-input">
                <label>Klappentext / Beschreibung: </label>
                <textarea
                    id="description"
                    v-model="newBook.description"
                    rows="3"
                    cols="50"
                    placeholder="Gib hier deine Beschreibung ein..."
                ></textarea>
            </div>

            <hr />
        
            <h3>Füge dein erstes Kapitel hinzu: </h3>
            <div>
                <label>Titel: </label>
                <input type="text" v-model="newChapter.title"/>
            </div>
            
            <div class="area-input">
                <label>Text:</label>
                <textarea
                    id="chapterText"
                    v-model="newChapter.content"
                    rows="10"
                    cols="50"
                    placeholder="Gib hier den Text deines ersten Kapitels ein"
                ></textarea>
            </div>

            <p v-if="showError" class="error" v-for="entry in error">{{ entry }}</p>

            <div class="buttons-group">
                <button @click="$emit('closeModal')">Abbrechen</button>
                <button @click="checkInput()">Buch erstellen</button>
            </div>
      </div>
    </div>
</template>

<style>
.modal {
  width: 50%;
  background-color: bisque;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<style scoped>
.input {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.area-input {
    display: flex;
    flex-direction: column;
    width: 100%;    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>