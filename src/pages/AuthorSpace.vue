<script setup lang="ts">
import { ref } from 'vue';
/* import { useAuthorStore } from '../stores/useAuthor';*/
import type { Book } from "../types/book.ts";
import AddNewBook from '../modals/AddNewBook.vue';
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import ChangeBookinfo from '../modals/ChangeBookinfo.vue';
import { useAuthStore } from '../stores/useAuth.ts';
import Login from '../modals/Login.vue';
import { useUserStore } from '../stores/useUsers.ts';

const authStore = useAuthStore();
const userStore = useUserStore();

const addNewBook = ref(false);
const changeBookinfo = ref(false);

const books = ref([
    {
    } as Book,
    {
    } as Book,
    {
    } as Book,
] as Book[]) 
/* const bookToChange = ref({
    title: "test",
    id: 5,
    chapters: 0
} as Book)
provide("bookToChange", bookToChange.value); */

const showError = ref(false);

function setBook(id: number) {
/*     const tmp = books.value.find(book => book.id === id) as Book;
    bookToChange.value = tmp;
    console.log("bookToChange set: ", bookToChange.value)*/

    changeBookinfo.value = true; 
}
</script>

<template>
    <div v-if="authStore.currentUser" class="authorspacewrapper body">
        <TheHeader type="main" title="Autorenbereich"/>
        <div  class="content-container">
            <div class="container-header">
                <h2> Herzlich Willkommen, {{ userStore.loggedinUser?.username}}!</h2>
            </div>
        </div>

        <hr />
        
        <div class="content-container">
            <div class="container-header">
                <h2>Meine Bücher:</h2>
                <button @click="addNewBook = true">Neues Buch anlegen</button>
            </div>
            <ul class="booklist">
                <li v-for="book in books">{{ book.title }}: <!-- {{ book.chapters }} --> Kapitel
                    <button>Infos bearbeiten</button>  <!-- @click="setBook(book.id)" -->
                    <button>Kapitel bearbeiten</button>
                </li>
            </ul>
        </div>
        <TheFooter type="main" title=""/>
    </div>

    <AddNewBook v-if="addNewBook" @closeModal="addNewBook = false" />

    <ChangeBookinfo v-if="changeBookinfo" @closeModal="changeBookinfo = false"/>
    
    <div v-if="!authStore.currentUser" class="login modal-overlay">
        <Login />
    </div>
</template>

<style>


.error {
    color: red;
}

button {
    margin: 1rem;
}

.container-header {
    display: flex;
    flex-direction: row;

    width: 100%;
    justify-content: space-between;
    align-items: center;
}
</style>

<style scoped>
.booklist {
    list-style-type: none;
    align-self: flex-start;
    margin-left: -2.5rem;
}
</style>