<script setup lang="ts">
import { computed, inject, ref, type Ref } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{
  title: string;
  type: string;
}>();

const loggedIn = inject("loggedIn") as Ref<boolean>; 

const loginLogout = computed(() => {
  if (!loggedIn) {
    return "none"
  }
  if (loggedIn.value == true) {
    return "Logout"
  } else {
    return "Login"
  }
})

const numOfStars = ref(20);
</script>

<template>
  <header
    :class="{
      'main-header': props.type == 'main',
      'queer-header': props.type == 'queer',
      'autism-header': props.type == 'autism',
      'fanfiction-header': props.type == 'ff',
      'others-header': props.type == 'other',
    }"
  >
    <div v-if="type == 'autism'" v-for="_ in numOfStars" class="star"></div>
    <div v-if="type != 'main'" class="navigation">

      <!-- Pfeil richtig justieren - zu hoch! -->
      <RouterLink to="/"><img src="../assets/arrow-big-left.svg" class="back"/></RouterLink>
      <h2>{{ title }}</h2>
      <div></div>
    </div>

    <div v-else class="navigation main">
      <RouterLink to="/"><img src="../assets/icon.png" class="icon"/></RouterLink>
      <h1>{{ title }}</h1>

      <button @click="$emit('login')"> {{ loginLogout }}</button>
    </div>
  </header>
</template>

<style scoped>
.icon {
  height: 4rem;
}

.back {
  height: 2rem;
}

.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 70%;
  align-items: center;
}

.main {
  justify-content: center;
  gap: 4rem;
}

header {
  height: 5rem;
  justify-content: center;

  display: flex;
}

.main-header {
  background-color: orangered;
}

.others-header {
  background-color: rgb(107, 233, 255);
}


.autism-header {
  background: linear-gradient(to bottom, #290344, #512179);
  position: relative;

  .star {
    position: absolute;
    background-color: white;
    border-radius: 50%;
    opacity: 0.8;
  }

  .star:nth-child(1) {
    top: 20%;
    left: 10%;
    width: 2px;
    height: 2px;
  }
  .star:nth-child(2) {
    top: 30%;
    left: 25%;
    width: 3px;
    height: 3px;
  }
  .star:nth-child(3) {
    top: 15%;
    left: 50%;
    width: 1.5px;
    height: 1.5px;
  }
  .star:nth-child(4) {
    top: 40%;
    left: 70%;
    width: 2.5px;
    height: 2.5px;
  }
  .star:nth-child(5) {
    top: 60%;
    left: 15%;
    width: 1px;
    height: 1px;
  }
  .star:nth-child(6) {
    top: 80%;
    left: 35%;
    width: 2px;
    height: 2px;
  }
  .star:nth-child(7) {
    top: 50%;
    left: 80%;
    width: 1.5px;
    height: 1.5px;
  }
  .star:nth-child(8) {
    top: 70%;
    left: 55%;
    width: 3px;
    height: 3px;
  }
  .star:nth-child(9) {
    top: 90%;
    left: 20%;
    width: 2px;
    height: 2px;
  }
  .star:nth-child(10) {
    top: 10%;
    left: 90%;
    width: 1px;
    height: 1px;
  }
  .star:nth-child(11) {
    top: 25%;
    left: 5%;
    width: 2px;
    height: 2px;
  }
  .star:nth-child(12) {
    top: 45%;
    left: 40%;
    width: 1.5px;
    height: 1.5px;
  }
  .star:nth-child(13) {
    top: 75%;
    left: 10%;
    width: 2.5px;
    height: 2.5px;
  }
  .star:nth-child(14) {
    top: 5%;
    left: 65%;
    width: 1px;
    height: 1px;
  }
  .star:nth-child(15) {
    top: 35%;
    left: 85%;
    width: 2px;
    height: 2px;
  }
  .star:nth-child(16) {
    top: 55%;
    left: 30%;
    width: 3px;
    height: 3px;
  }
  .star:nth-child(17) {
    top: 65%;
    left: 75%;
    width: 1.5px;
    height: 1.5px;
  }
  .star:nth-child(18) {
    top: 80%;
    left: 50%;
    width: 2px;
    height: 2px;
  }
  .star:nth-child(19) {
    top: 90%;
    left: 15%;
    width: 1px;
    height: 1px;
  }
  .star:nth-child(20) {
    top: 15%;
    left: 80%;
    width: 2.5px;
    height: 0.5px;
  }
}

.queer-header {
  background: linear-gradient(
    to bottom right,
    rgba(255, 0, 0, 0.8),
    rgba(255, 127, 0, 0.8),
    rgba(255, 255, 0, 0.8),
    rgba(0, 255, 0, 0.8),
    rgba(0, 0, 255, 0.8),
    rgba(75, 0, 130, 0.8),
    rgba(148, 0, 211, 0.8)
  );
}

.fanfiction-header {
  background: linear-gradient(to bottom, #011135, #234fc7);
}

.header-text {
  text-align: center;
  color: white;
}
</style>
