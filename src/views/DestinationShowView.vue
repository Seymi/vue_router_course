<template>
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="`images/${destination.image}`" :alt="destination.name">
        <p>{{ destination.description }}</p>
      </div>
    </section>

    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{name: 'experience.show', params: { experienceSlug: experience.slug } }"
        >
          <experience-card :experience="experience"></experience-card>
        </router-link>
      </div>
    </section>
</template>

<script>
  import sourceData from '@/data.json';
  import ExperienceCard from '@/components/ExperienceCard.vue';

  export default {
    components: { ExperienceCard },
    props: {
      id: {type: Number, required: true}
    },
    data() {
      return {
        destinations: sourceData.destinations,
        experiences: sourceData.destinations.experiences
      }
    },
    computed: {
      destinationId() {
        return parseInt(this.$route.params.id);
      },
      destination() {
        return this.destinations.find( destination => destination.id === this.destinationId );
      }
    }
  }
</script>
