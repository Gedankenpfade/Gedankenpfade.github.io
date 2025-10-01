<script setup lang="ts">
import { onMounted } from 'vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import { useBooksStore } from '../stores/useBooks';

const bookStore = useBooksStore();

onMounted(async () => {
    await bookStore.fetchQueerBooks();
})
</script>

<template>
    <TheHeader type="queer" title="Queere Werke" />
    <div class="content-container">
        <!-- <div class="bookshelf" style="margin-top: 1rem;">
                <a v-for="_ in books" href="" class="book">
                    <img src="../assets/Regenbogen-OS.jpg" class="cover" alt="Regenbogen-Oneshots von Lily Evans-Granger"/>
                    <p class="bookinfo">Regenbogen-Oneshots</p>
                </a>
        </div> -->
        <div class="shelf">
            <div v-for="book in bookStore.queerBooks" class="book-details">
                <div class="cover-img">

                </div>
                <div class="bookshelf-description">
                    <p class="info-group">
                        <span>Titel: </span>
                        <span>{{ book.title }}</span>
                    </p>

                    <p class="info-group">
                        <span>Autor: </span>
                        <span>{{ book.author }}</span>
                    </p>
                    
                    <p class="info-group">
                        <span>Beschreibung: </span>
                        <span>{{ book.description }}</span>
                    </p>

                    <RouterLink :to="{name:'Inhaltsverzeichnis', params: {title:book.title.toString()}}">Jetzt lesen -> </RouterLink>
                </div>

                
            </div>
        </div>
    </div>

    <TheFooter type="queer" title="" />
</template>

<style>
.shelf {
    display: flex;
    flex-direction: column;

    gap: 1rem;
    margin-top: 1rem;
}
.book-details {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    border: 1px solid gray;
    border-radius: 0.5rem;
    padding: 1rem;
}

.cover-img {
    height: 400px;
    width: 250px;
    background-color: beige;
    border-radius: 0.5rem;
}

.bookshelf-description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-top: 0.5rem;
}
</style>

<!-- <style scoped>
.bookshelf {
    display: grid;

    @media screen and (min-width: 680px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    @media screen and (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media screen and (min-width: 1512px) {
        grid-template-columns: repeat(4, 1fr);
    }
}

.book {
    display: flex;
    flex-direction: column;

    cursor: pointer;
    text-decoration: none;
    color: black;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: larger;

    height: 500px;
    align-items: center;

    .cover {
        max-width: 80%;
        max-height: 90%;
        object-fit: cover;

        border: 1px solid gray;
        border-radius: 4px;
        box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

        transform: rotateY(0deg);
        transition: transform 0.5s;
    }

    .cover:hover {
        transform: rotateY(-20deg);
    }
}

.bookinfo {
    margin-top: 6px;
}

</style> -->