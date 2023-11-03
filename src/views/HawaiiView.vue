<template>
    <div class="hawaii">
      <h1>Hawaii</h1>
      <div v-for="experience in experiences"
        :key="experience.id"
      >
        <h2>{{ experience.name }}</h2>
        <img :src="`images/${experience.image}`" :alt="experience.name">
      </div>
    </div>
  </template>

<script>
  import sourceData from '@/data.json';

  export default {
    data() {
      return {
        experiences: sourceData.destinations.expieriences
      }
    }
  }
</script>
