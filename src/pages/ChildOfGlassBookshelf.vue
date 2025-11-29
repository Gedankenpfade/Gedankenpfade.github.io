<script setup lang="ts">
import { onMounted } from 'vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import { useBooksStore } from '../stores/useBooks';

const bookStore = useBooksStore();

onMounted(async () => {
    await bookStore.fetchGlassChildBooks();
})
</script>

<template>
    <TheHeader type="glasschild" title="Child of Glass" />
    <div class="content-container">
    <div class="shelf">
            <div v-for="book in bookStore.glassChildBooks" class="book-details">
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

                    <RouterLink :to="{name:'Inhaltsverzeichnis', params: {category: book.category.toString(), title:book.title.toString()}}">Jetzt lesen -> </RouterLink>
                </div>

                
            </div>
        </div>
    </div>

    <TheFooter type="glasschild" title="" />
</template>

<style scoped>
</style>