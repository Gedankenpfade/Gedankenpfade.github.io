<script setup lang="ts">
const props = defineProps<{
    link: string,
    icon: boolean,
    text: string,
}>();
</script>

<template>
    <RouterLink :to="link">
        <div class="group">
            <p>{{ text }}</p>
            <img class="icon" src="../assets/corner-down-right.svg"/>
        </div>
    </RouterLink>
</template>

<style scoped>
p {
    margin: 0px;
}

.group {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0.3rem;

    background-color: beige;
    width: 5rem;
    height: 5rem;
    border-radius: 0.25rem;
}

.icon {
    width: 24px;
}
</style>