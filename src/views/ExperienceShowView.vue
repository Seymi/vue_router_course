<template>
  <div>
    <section>
        <div class="route-buttons">
          <route-button :routeDestination="{route: '/', text: '', icon: 'fa fa-home'}"></route-button>
          <route-button :routeDestination="{route: 'back()', text: 'zurück' }"></route-button>
        </div>
        <h1>{{ experience.name }}</h1>
        <img :src="`images/${experience.image}`" :alt="experience.name">
        <p>{{ experience.description }}</p>
    </section>
  </div>
</template>


<script>
  import sourceData from '@/data.json';
  import RouteButton from '../components/RouteButton.vue';
  export default {
  components: { RouteButton },
    props: {
      id: { type: Number, required: true },
      experienceSlug: {type: String, required: true}
    },
    computed: {
      destination() {
        return sourceData.destinations.find( destination => destination.id === this.id );
      },
      experience() {
        return this.destination.experiences.find ( experience => experience.slug === this.experienceSlug );
      }
    }
  }
</script>
