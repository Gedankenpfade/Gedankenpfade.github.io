<script setup lang="ts">
import { useRoute } from 'vue-router';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import { useBooksStore } from '../stores/useBooks';
import type { Book } from '../types/book';
import { onMounted, ref } from 'vue';

const bookStore = useBooksStore();
const route = useRoute()
const currentBook = ref({} as Book | null)

onMounted(async () => {
    if (route != undefined) {
        const routeAsString = route.params.title as string
        currentBook.value = await bookStore.getBookByName(routeAsString, 'queer')
    }
})
</script>

<template>
    <TheHeader title="" type="queer"/>
        <div class="content-container">
            <div class="description">
                <p>
                    {{ currentBook?.title }}
                </p>
                <p>
                    <span>von </span>
                    <span>{{ currentBook?.author }}</span>
                </p>
                <p>
                    <span>Beschreibung: </span>
                    <span>{{ currentBook?.description }}</span>
                </p>
            </div>

            <hr />

            <div class="content">
                <h3>Inhalt:</h3>
                <ol v-if="currentBook" class="contentlist">
                    <li v-for="chap, idx in currentBook?.content"><RouterLink :to="{name:'Kapitel', params: {title: currentBook.title.toString(), chapter: idx+1}}">{{ chap.title }}</RouterLink></li>
                </ol>
            </div>
        </div>
    <TheFooter title="" type="queer" />
</template>

<style scoped>
.description {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding-bottom: 2rem;
}

.content {
    padding-top: 2rem;
    text-align: left;
}

.contentlist {
    margin-left: -1rem;
}
</style>