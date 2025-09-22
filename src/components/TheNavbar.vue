<script setup lang="ts">
const links = [
  { title: "Homepage", link: "" },
  { title: "Autismus (er)leben", link: "" },
];
</script>

<template>
  <ul class="navbar">
    <li v-for="entry in links" :key="entry.title">
      <a :href="entry.link">{{ entry.title }}</a>
    </li>
  </ul>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;

  list-style-type: none;
  /* Breite der Items festlegen */
}
</style>
