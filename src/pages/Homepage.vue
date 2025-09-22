<script setup lang="ts">
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import router from '../router';

const books = ["Book", "Book", "Book", "Book"];

function navigateToAuthorsSpace() {
    router.push( {name: 'Autorenuebersicht'});
}
</script>

<template>
    <div class="body">
        <TheHeader title="Gedankenpfade" type="main"/>
        <h2>Startseite</h2>
        <p>Intro - Über diese Seite bla bla</p>
        <hr />
        <div class="bookshelf">
            <h3>Bücherregal</h3>

            <h4>Queere Werke</h4>
            <div class="shelf-layer">
                <div v-for="book in books" class="book">{{ book }}</div>
                <RouterLink to="/queer" class="book further-books">Weitere Bücher ansehen -></RouterLink>
            </div>

            <h4>Harry Potter Fanfictions</h4>
            <div class="shelf-layer">
                <div v-for="book in books" class="book">{{ book }}</div>
                <RouterLink to="/fanfiction" class="book further-books">Weitere Bücher ansehen -></RouterLink>
            </div>

            <h4>Andere</h4>
            <div class="shelf-layer">
                <div v-for="book in books" class="book">{{ book }}</div>
                <RouterLink to="/autismus" class="book further-books">Weitere Bücher ansehen -></RouterLink>
            </div>
        </div>

        <TheFooter @authorLogin="navigateToAuthorsSpace()" type="main" title="Tschüss" />
    </div>

    
</template>

<style scoped>
.bookshelf  {
    width: 80%;
    align-self: center;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.shelf-layer {
    width: 100%;
    height: 6rem;
    border: brown 7px solid;
    background-color: rgba(165, 42, 42, 0.322);

    display: flex;
    flex-direction: row;
    gap: 0.25rem;
}

.book {
    margin: 0.5rem;
    background-color: wheat;
    width: 4rem;
    height: 5rem;
}

.further-books {
    background-color: white;
}

h4 {
    margin-bottom: 2px;
}

hr {
    width: 85%;
}
</style>