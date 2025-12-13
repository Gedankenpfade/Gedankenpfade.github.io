<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type { Book, Chapter } from "../types/book.ts";
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import { useAuthStore } from '../stores/useAuth.ts';
import Login from '../modals/Login.vue';
import { useUserStore } from '../stores/useUsers.ts';
import { useBooksStore } from '../stores/useBooks.ts';
import { useRoute } from 'vue-router';
import AuthorSpace from './AuthorSpace.vue';

const authStore = useAuthStore();
const userStore = useUserStore();
const bookStore = useBooksStore();

const route = useRoute();
const currentBook = ref({} as Book)
const currentChapter = ref({} as Chapter);
const isNewChapter = ref(false);

onMounted(async () => {
    const titleAsString = route.params.title as string

    if (authStore.currentUser) {
        const authorAsString = userStore.loggedinUser?.username as string
        currentBook.value = await bookStore.getBookByAuthor(titleAsString, authorAsString) || {} as Book;
        currentChapter.value = currentBook.value?.content[0] || {} as Chapter;
    } else {
        console.log("currentUser fehlt")
    }
})

const showError = ref(false);

function setCurrentChapter(id: number) {
    currentChapter.value = currentBook.value.content[id-1] || {} as Chapter;
    isNewChapter.value = false;
}

function createNewChapter() {
    currentChapter.value = {
        title: "Kapitel " + (currentBook.value.content.length +1),
        content: "",
        id: currentBook.value.content.length+1,
    } as Chapter;
    isNewChapter.value = true;
}

function saveChapter() {
    // ToDo check if valid!
    bookStore.addChapterToBook(currentBook.value, currentChapter.value);
    isNewChapter.value = false;
}

function saveInfoChanges() {
    // ToDo: prüfen ob valid!
    bookStore.changeBookInformation(currentBook.value);
}
</script>

<template>
    <div class="loading-spinner"></div>

    <div v-if="authStore.currentUser" class="authorspacewrapper body">
        <TheHeader type="main" title="Autorenbereich"/> <!-- ToDo: Backlink! -->
        <div class="content-container">
            <h2>"{{currentBook?.title}}" bearbeiten:</h2>
            
            <div class="book-edit-view">
                <div class="info-column">
                    <div class="autor">
                        <label>Autor: </label>
                        <input type="textfield" v-model="currentBook.author"></input>
                    </div>

                    <div class="area-input">
                        <label>Klappentext / Beschreibung: </label>
                        <textarea
                            id="description"
                            v-model="currentBook.description"
                            rows="3"
                            cols="50"
                            placeholder="Gib hier deine Beschreibung ein..."
                        ></textarea>
                    </div>

                    <button @click="saveInfoChanges()">Änderungen speichern</button>

                    <ul class="chapters-list">
                        <li v-for="chapter in currentBook.content"><button @click="setCurrentChapter(chapter.id)">{{ chapter.title }}</button></li>
                    </ul>
                    <button @click="createNewChapter()">Kapitel hinzufügen</button>
                </div>

                <div class="chapter-edit-column">
                    <div>
                        <label>Titel: </label>
                        <input type="text" v-model="currentChapter.title" :disabled="!isNewChapter"/>
                    </div>
                    <div class="area-input">
                        <textarea
                            id="text"
                            v-model="currentChapter.content"
                            rows="3"
                            cols="50"
                            placeholder="Text hier einfügen, Formatierung mit HTML-Tags!"
                        ></textarea>
                    </div>
                    <button @click="saveChapter()">{{ isNewChapter ? 'neues Kapitel speichern' : 'Änderungen speichern' }}</button>
                </div>
            </div>
        </div>
        <TheFooter type="main" title=""/>
    </div>
    
    <div v-if="!authStore.currentUser" class="login modal-overlay">
        <Login />
    </div>
</template>

<style scoped>
.content-container {
    width: 70%;
    height: 100%;
}

.book-edit-view {
    display: flex;
    flex-direction: row;
    gap: 2%;

    align-items: flex-start;
    text-align: left;
}

.info-column {
    display: flex;
    flex-direction: column;
    width: 34%;
}

.chapter-edit-column {
    display: flex;
    flex-direction: column;
    width: 64%;
}
</style>