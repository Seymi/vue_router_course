<template>
    <div>
        <h1>Welcome {{ username.value }}</h1>
        <button class="btn" @click="logout">Logout</button>
        <route-button :routeDestination="{route: '/invoices', text: 'Rechnungen ', icon: 'fa fa-money'}"></route-button>
    </div>
</template>


<script>
    import RouteButton from '@/components/RouteButton.vue';

    export default {
        components: { RouteButton },
        data() {
            return {
                username: window.user
            }
        },
        methods: {
            logout() {
                window.user = null;
                this.$router.push( { name: 'home' } );
            }
        }

    }

</script>
