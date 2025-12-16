<script setup lang="ts">
import { onMounted, ref } from 'vue';
import AddNewBook from '../modals/AddNewBook.vue';
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';
import { useAuthStore } from '../stores/useAuth.ts';
import Login from '../modals/Login.vue';
import { useUserStore } from '../stores/useUsers.ts';
import { useBooksStore } from '../stores/useBooks.ts';

const authStore = useAuthStore();
const userStore = useUserStore();
const bookStore = useBooksStore();

onMounted(async () => {
    if (authStore.currentUser) {
        getBooks();
    }
})

const addNewBook = ref(false);

const showError = ref(false);

async function getBooks() {
    console.log("getting books...")
    await bookStore.getAllBooks();
    const authorName = userStore.loggedinUser ? userStore.loggedinUser.username : "";
    await bookStore.getBooksFromCreator(authorName);
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
                <li v-for="book in bookStore.creatorsBooks">{{ book.title }}: {{ book.content.length }} Kapitel
                    <RouterLink :to="{name:'Buch bearbeiten', params:{title: book.title.toString()}}">Bearbeiten</RouterLink>
                </li>
            </ul>
        </div>
        <TheFooter type="main" title=""/>
    </div>

    <AddNewBook v-if="addNewBook" @closeModal="addNewBook = false" />
    
    <div v-if="!authStore.currentUser" class="login modal-overlay">
        <Login @closeModal="getBooks()" />
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