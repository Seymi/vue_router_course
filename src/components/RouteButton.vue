<template>
    <div class="route-buttons">
        <button v-if="routeDestination.route === 'back()'" @click="$router.back()">{{routeDestination.text}}</button>
        <button v-if="routeDestination.route !== 'back()'" @click="$router.push(routeDestination.route)">{{routeDestination.text}}<i v-if="routeDestination.icon" :class="routeDestination.icon"></i></button>
    </div>
</template>

<script>
export default {
    props: {
        routeDestination: {
            route: { type: String, default: '/', required: true },
            text:  { type: String, default: 'Zurück', required: true },
            icon:  { type: String }
        }
    }
  }
</script>
