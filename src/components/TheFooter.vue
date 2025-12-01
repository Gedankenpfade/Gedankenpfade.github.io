<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  title: string;
  type: string;
}>();

const numOfStars = ref(20);
</script>

<template>
  <footer
    :class="{
      'main-footer': props.type == 'main',
      'queer-footer': props.type == 'queer',
      'autism-footer': props.type == 'autism',
      'fanfiction-footer': props.type == 'ff',
      'glasschild-footer': props.type == 'glasschild',
      'others-footer': props.type == 'other',
    }"
  >
    <div  class="star"></div>
				<div v-if="type == 'autism'" v-for="_ in numOfStars" class="star"></div>

    <p @click="$emit('authorLogin')">{{ title }}</p>
  </footer>
</template>

<style scoped>
footer {
  height: 5rem;
  /*margin-top: 1rem;*/
}

.main-footer {
  background-color: orangered;
}

.others-footer {
  background-color: rgb(107, 233, 255);
}

.autism-footer {
  background: linear-gradient(to bottom, #512179, #290344);
  position: relative;

    .star {
      position: absolute;
      background-color: white;
      border-radius: 50%;
      opacity: 0.8;
    }

    .star:nth-child(1) {
      top: 12%;
      left: 8%;
      width: 2.5px;
      height: 2.5px;
    }
    .star:nth-child(2) {
      top: 22%;
      left: 18%;
      width: 1.5px;
      height: 1.5px;
    }
    .star:nth-child(3) {
      top: 5%;
      left: 40%;
      width: 3px;
      height: 3px;
    }
    .star:nth-child(4) {
      top: 35%;
      left: 60%;
      width: 2px;
      height: 2px;
    }
    .star:nth-child(5) {
      top: 50%;
      left: 10%;
      width: 1px;
      height: 1px;
    }
    .star:nth-child(6) {
      top: 70%;
      left: 25%;
      width: 2.2px;
      height: 2.2px;
    }
    .star:nth-child(7) {
      top: 45%;
      left: 75%;
      width: 1.8px;
      height: 1.8px;
    }
    .star:nth-child(8) {
      top: 80%;
      left: 55%;
      width: 2.8px;
      height: 2.8px;
    }
    .star:nth-child(9) {
      top: 90%;
      left: 30%;
      width: 1.5px;
      height: 1.5px;
    }
    .star:nth-child(10) {
      top: 15%;
      left: 85%;
      width: 2.5px;
      height: 2.5px;
    }
    .star:nth-child(11) {
      top: 25%;
      left: 12%;
      width: 1.2px;
      height: 1.2px;
    }
    .star:nth-child(12) {
      top: 65%;
      left: 35%;
      width: 3.5px;
      height: 3.5px;
    }
    .star:nth-child(13) {
      top: 55%;
      left: 45%;
      width: 2px;
      height: 2px;
    }
    .star:nth-child(14) {
      top: 75%;
      left: 5%;
      width: 1.5px;
      height: 1.5px;
    }
    .star:nth-child(15) {
      top: 40%;
      left: 90%;
      width: 2.2px;
      height: 2.2px;
    }
    .star:nth-child(16) {
      top: 30%;
      left: 20%;
      width: 1px;
      height: 1px;
    }
    .star:nth-child(17) {
      top: 10%;
      left: 70%;
      width: 2.5px;
      height: 2.5px;
    }
    .star:nth-child(18) {
      top: 85%;
      left: 15%;
      width: 1.8px;
      height: 1.8px;
    }
    .star:nth-child(19) {
      top: 60%;
      left: 80%;
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

.queer-footer {
  background: linear-gradient(
    to bottom right,
    rgba(148, 0, 211, 0.8),
    /* Violett mit 50% Transparenz */ rgba(75, 0, 130, 0.8),
    /* Indigo mit 50% Transparenz */ rgba(0, 0, 255, 0.8),
    /* Blau mit 50% Transparenz */ rgba(0, 255, 0, 0.8),
    /* Grün mit 50% Transparenz */ rgba(255, 255, 0, 0.8),
    /* Gelb mit 50% Transparenz */ rgba(255, 127, 0, 0.8),
    /* Orange mit 50% Transparenz */ rgba(255, 0, 0, 0.8)
      /* Rot mit 50% Transparenz */
  );
}

.fanfiction-footer {
  background: linear-gradient(to bottom, #234fc7, #011135);
}

.glasschild-footer {
  background: linear-gradient(to bottom, #b3e5f5, #37cdff);
}

.footer-text {
  text-align: center;
  color: white;
}
</style>
