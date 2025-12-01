<script setup lang="ts">
import { onMounted } from 'vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import { useBooksStore } from '../stores/useBooks';

const bookStore = useBooksStore();

onMounted(async () => {
    await bookStore.fetchAutismBooks();
})
</script>

<template>
    <TheHeader type="autism" title="Autismus (er)leben" />
    <div class="background-container autism-bg">
    <div class="content-container">
    <div class="shelf">
            <div v-for="book in bookStore.autismBooks" class="book-details">
                <div class="book-cover">

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

                    <RouterLink :to="{name:'Inhaltsverzeichnis', params: {category: book.category.toString(), title:book.title.toString()}}">Jetzt lesen -> </RouterLink>
                </div>

                
            </div>
        </div>
    </div>
</div>
    <TheFooter type="autism" title="" />
</template>

<style>
.autism-bg {
    background: radial-gradient(circle, 
    rgba(41, 3, 68, 0.4),
    rgba(81, 33, 121, 0.4) 
);
}
</style>