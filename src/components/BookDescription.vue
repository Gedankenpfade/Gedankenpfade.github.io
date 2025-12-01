<script setup lang="ts">
import type {Book} from "../types/book.ts"

const props = defineProps<{
    book: Book
}>();
</script>

<template>
    <div class="book-description">
    <RouterLink class="book-cover" :to="{name:'Inhaltsverzeichnis', params: {category: book.category.toString(), title:book.title.toString()}}" />
    
    <div class="book-infos">
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
</template>

<style scoped>
.book-description {
    display: flex;
    flex-direction: column;
    width: 80%;
    align-self: center;

    border-radius: 0.5rem;
    padding: 1rem;
    gap: 1rem;
    border: 1px solid gray;

    background-color: rgb(255, 248, 205);

    /*
    @media screen and (min-width: 680px) {
        
    }*/

    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }
/*
    @media screen and (min-width: 1512px) {

    }

    @media screen and (min-width: 2056px) {
       
    }  */ 
}

.book-infos {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    margin-top: 0.5rem;
}
</style>