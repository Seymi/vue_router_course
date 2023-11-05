<template>
    <div id="nav">
        <AppLink to="/"><i class="fa fa-home"></i></AppLink>
        <AppLink
            v-for="destination in destinations"
            :key="destination.id"
            :to="{name: 'destination.show', params: { id: destination.id, slug: destination.slug }}"
        > {{  destination.name }}
        </AppLink>
        <AppLink v-if="userLoggedIn" :to="{name: 'protected'}">Dashbord</AppLink>
        <AppLink v-if="userLoggedIn" :to="{name: 'invoices'}">Invoices</AppLink>
        <AppLink v-if="!userLoggedIn" :to="{name: 'userLogin'}">Login</AppLink>

        <AppLink to="http://seymi.at">Seymi</AppLink>

    </div>
</template>

<script>
    import sourceData from '@/data.json';
    //import AppLink from '@/components/AppLink.vue';

    export default {
        //components: {AppLink},
        data() {
            return {
                destinations: sourceData.destinations,
                userLoggedIn: this.isUserLoggedIn()
            }
        },
        methods: {
            isUserLoggedIn() {
                if (window.user) {
                    this.userLoggedIn = true;
                } else {
                    this.userLoggedIn = false;
                }
                return this.userLoggedIn;
            }
        }
    }
</script>
