<script setup lang="ts">
import { computed, onMounted, provide, ref } from 'vue';
import ButtonLink from '../components/ButtonLink.vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import Login from '../modals/Login.vue';
import router from '../router';
import { useBooksStore } from '../stores/useBooks';
import { useAuthStore } from '../stores/useAuth';

const bookStore = useBooksStore();
const authStore = useAuthStore();

const loggedIn = computed(() => authStore.currentUser != null)
provide("loggedIn", loggedIn)

const showLogin = ref(false)

onMounted(async () => {
    await bookStore.getAllBooks();
})

function navigateToAuthorsSpace() {
    router.push( {name: 'Autorenuebersicht'});
}

function handleLogin() {
    if (authStore.currentUser == null) {
        showLogin.value = true;
    } else {
        authStore.logout();
        // bookStore.authorsBooks = []; // ToDo - bei Logout Autorenbereich leeren!
    }
}
</script>

<template>
    <TheHeader title="Gedankenpfade" type="main" @login="handleLogin()"/>
    <div class="background-container hp-bg">
        <div class="content-container">
            <div class="bookshelf">
                <h3>Queere Werke</h3>
                <div class="shelf-layer">
                    <RouterLink  v-for="book in bookStore.queerBooks" class="book" :to="{name:'Inhaltsverzeichnis', params: {category: book.category.toString(), title:book.title.toString()}}">
                        <span>{{ book.title }}</span> 
                        <span>{{ book.author }}</span>
                    </RouterLink>
                    <ButtonLink class="further-books" link="/queer" :icon="true" text="Weitere Bücher ansehen"/>
                </div>

                <h3>Child of Glass</h3>
                <div class="shelf-layer">
                    <RouterLink  v-for="book in bookStore.glassChildBooks" class="book" :to="{name:'Inhaltsverzeichnis', params: {category: book.category.toString(), title:book.title.toString()}}">
                        <span>{{ book.title }}</span> 
                        <span>{{ book.author }}</span>
                    </RouterLink>
                    <ButtonLink class="further-books" link="/child-of-glass" :icon="true" text="Weitere Bücher ansehen"/>
                </div>

                
                <h3>Harry Potter Fanfictions</h3>
                <div class="shelf-layer">
                    <RouterLink  v-for="book in bookStore.ffBooks" class="book" :to="{name:'Inhaltsverzeichnis', params: {category: book.category.toString(), title:book.title.toString()}}">
                        <span>{{ book.title }}</span> 
                        <span>{{ book.author }}</span>
                    </RouterLink>
                    <ButtonLink class="further-books" link="/fanfiction" :icon="true" text="Weitere Bücher ansehen"/>
                </div>

                <h3>Autismus</h3>
                <div class="shelf-layer">
                    <RouterLink  v-for="book in bookStore.autismBooks" class="book" :to="{name:'Inhaltsverzeichnis', params: {category: book.category.toString(), title:book.title.toString()}}">
                        <span>{{ book.title }}</span> 
                        <span>{{ book.author }}</span>
                    </RouterLink>
                    <ButtonLink class="further-books" link="/autismus" :icon="true" text="Weitere Bücher ansehen"/>
                    
                </div>

                <h3>Andere</h3>
                <div class="shelf-layer">
                    <RouterLink  v-for="book in bookStore.otherBooks" class="book" :to="{name:'Inhaltsverzeichnis', params: {category: book.category.toString(), title:book.title.toString()}}">
                        <span>{{ book.title }}</span> 
                        <span>{{ book.author }}</span>
                    </RouterLink>
                    <ButtonLink class="further-books" link="/andere" :icon="true" text="Weitere Bücher ansehen"/>
                </div>
                
            </div>
        </div>
    </div>
    <TheFooter @authorLogin="navigateToAuthorsSpace()" type="main" title="Tschüss" />

    <Login v-if="showLogin" @closeModal="showLogin = false"/>
</template>

<style scoped>
.hp-bg {
    background-color: rgba(255, 196, 0, 0.39);
}

.bookshelf  {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 90%;

    margin-top: 1rem;
}

.shelf-layer {
    width: 100%;
    height: 8rem;
    border: rgb(66, 31, 11) 7px solid;
    background-color: rgba(131, 64, 25, 0.5);

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 0.25rem;

    margin-bottom: 1rem;
}

.book {
    display: flex;
    flex-direction: column; /* Inhalte untereinander anordnen */
    justify-content: space-between; /* Platz zwischen Titel und Autor schaffen */
    
    margin: 0.5rem;
    background-color: wheat;
    width: 5rem;
    height: 7.3rem;
    border-radius: 0.25rem;

    border: 1px solid gray;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

    transform: rotateY(0deg);
    transition: transform 0.5s;

    &:hover {
        transform: rotateY(-20deg);
    }
}

.further-books {
    align-self: center;
}

h3 {
    margin-bottom: 0.2rem;
}
</style>