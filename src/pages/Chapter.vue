<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useBooksStore } from '../stores/useBooks';
import type { Book, Chapter } from '../types/book';
import { onMounted, ref } from 'vue';
import TheFooter from '../components/TheFooter.vue';

const bookStore = useBooksStore();
const route = useRoute()

const currentBook = ref({} as Book | null)
const chapter = ref({} as Chapter | undefined)

const footerClass = ref("");

onMounted(async () => {
    if (route != undefined) {
        const titleAsString = route.params.title as string
        const categoryAsString = route.params.category as string;
        if (categoryAsString == "queer") {
            currentBook.value = await bookStore.getBookByName(titleAsString, 'queer')
            footerClass.value = 'queer';
        } else {
            currentBook.value = await bookStore.getBookByName(titleAsString, 'glasschild')
            footerClass.value = 'glasschild';
        }
        chapter.value = currentBook.value?.content.find((chapter) => chapter.id === parseInt(route.params.chapter as string))
    }
})
</script>

<template>
    <!-- ToDo: Backlink zum Inhaltsverzeichnis -->
    <div class="content-container">
        <div class="chapter">
            <h1 class="titel">{{ chapter?.title }}</h1>
            <div class="text" v-html="chapter?.content"></div>
        </div>
    </div>

    <!-- ToDo: Navigation vorheriges / nächstes Kapitel -->

    <TheFooter :type=footerClass title="" />
</template>

<style scoped>

.chapter {
    display: flex;
    flex-direction: column;
    align-self: center;

    padding: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;

    border-radius: 0.5rem;
    border: 2px solid rgba(54, 30, 1, 0.8);

    background: radial-gradient(circle, #faeeaa, #f7ea9b, #faec9b, #fcecbd);
    box-shadow: inset 0 -5px 10px rgba(0, 0, 0, 0.5); /* Schatten am oberen Rand */

    font-size: medium;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    line-height: 1.5;
    text-align: left;

    /* ToDo: Hide Scrollbar!*/

    @media screen and (min-width: 1024px) {
        align-self: center;
        max-height: 75vh;
        overflow-y: scroll;
        
        padding: 2rem 2.5rem;
        margin: 0;
    }
}

.titel {
    margin-bottom: 0;
}
</style>