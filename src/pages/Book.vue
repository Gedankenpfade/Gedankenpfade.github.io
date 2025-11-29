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

const headerFooterClass = ref('');
const returnPath = ref('')

onMounted(async () => {
    if (route != undefined) {
        const titleAsString = route.params.title as string
        const categoryAsString = route.params.category as string;
        if (categoryAsString == "queer") {
            currentBook.value = await bookStore.getBookByName(titleAsString, 'queer')
            headerFooterClass.value = 'queer';
            returnPath.value = "Queer"
        } else {
            currentBook.value = await bookStore.getBookByName(titleAsString, 'glasschild')
            headerFooterClass.value = 'glasschild';
            returnPath.value = 'Child of Glass';
        }
        
    }

    console.log(currentBook.value);
})
</script>

<template>
    <TheHeader title="" :type="headerFooterClass" :return-path="returnPath"/>
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
                    <li v-for="chap, idx in currentBook?.content"><RouterLink :to="{name:'Kapitel', params: {category: currentBook.category.toString(), title: currentBook.title.toString(), chapter: idx+1}}">{{ chap.title }}</RouterLink></li>
                </ol>
            </div>
        </div>
    <TheFooter title="" :type="headerFooterClass" />
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