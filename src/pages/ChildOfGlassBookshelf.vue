<script setup lang="ts">
import { onMounted } from 'vue';
import TheFooter from '../components/TheFooter.vue';
import TheHeader from '../components/TheHeader.vue';
import { useBooksStore } from '../stores/useBooks';
import BookDescription from '../components/BookDescription.vue';

const bookStore = useBooksStore();

onMounted(async () => {
    await bookStore.fetchGlassChildBooks();
})
</script>

<template>
    <TheHeader type="glasschild" title="Child of Glass" />
    <div class="background-container glasschild-bg">
    <div class="content-container">
    <div class="shelf">
        <BookDescription v-for="b in bookStore.glassChildBooks" :book="b" />
    </div>
    </div>
</div>
    <TheFooter type="glasschild" title="" />
</template>

<style>
.glasschild-bg {
    background: radial-gradient(circle, 
    rgba(255, 255, 255, 0), /* Weiß */
    rgba(176, 224, 230, 0.4), /* Powder Blue */
    rgba(173, 216, 230, 0.4), /* Light Blue */
    rgba(179, 229, 245, 0.4)  /* Hellblau */
    );
}
</style>