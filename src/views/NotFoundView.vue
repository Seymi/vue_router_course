<template>
    <div class="page-not-found">
        <h1>Not Found</h1>
        <p v-if="!noDataFound">We could not found the page <b>{{ routePath }}</b> you requested!</p>
        <p v-if="noDataFound">No Data Found!</p>
        <route-button :routeDestination="{route: '/', text: '', icon: 'fa fa-home'}"></route-button>
        <route-button :routeDestination="{route: 'back()', text: 'zurück' }"></route-button>
    </div>
</template>


<script>
    //console.log('page not found:', this.routePath);
    import RouteButton from '../components/RouteButton.vue';
    export default {
        components: { RouteButton },
        props: {
            noDataFound: { type: Boolean, default: false }
        },
        computed: {
            routePath() {
                console.log('page not found:', this.$route.path);
                //console.log('page not found:', origRoutePath);
                return this.$route.path;
            },
        },
    }
</script>
