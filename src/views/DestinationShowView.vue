<template>
  <div>
    <section class="destination">
      <route-button :routeDestination="{route: '/', text: '', icon: 'fa fa-home'}"></route-button>
      <route-button :routeDestination="{route: 'back()', text: 'zurück' }"></route-button>
      <h1>{{ destination.name }}</h1>
      <div class="destination-details">
        <img :src="`images/${destination.image}`" :alt="destination.name">
        <p>{{ destination.description }}</p>
      </div>
    </section>

    <!-- eslint-disable vue/no-multiple-template-root -->

    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <AppLink
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{name: 'experience.show', params: { experienceSlug: experience.slug } }"
        >
          <experience-card :experience="experience"></experience-card>
        </AppLink>
      </div>

      <router-view></router-view>

    </section>
  </div>
</template>

<script>
  import sourceData from '@/data.json';
  import ExperienceCard from '@/components/ExperienceCard.vue';
  import RouteButton from '../components/RouteButton.vue';
  export default {
    components: { ExperienceCard, RouteButton },
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
