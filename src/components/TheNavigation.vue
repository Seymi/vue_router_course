<template>
    <div id="nav">
        <AppLink to="/"><i class="fa fa-home"></i></AppLink>
        <AppLink
            v-for="destination in destinations"
            :key="destination.id"
            :to="{name: 'destination.show', params: { id: destination.id, slug: destination.slug }}"
        > {{  destination.name }}
        </AppLink>
        <AppLink v-model="this.isUserLoggedIn" v-if="this.isUserLoggedIn()" :to="{name: 'protected'}">Dashbord</AppLink>
        <AppLink v-bind="this.isUserLoggedIn" v-if="this.isUserLoggedIn()" :to="{name: 'invoices'}">Invoices</AppLink>
        <AppLink v-if="!this.isUserLoggedIn()" :to="{name: 'userLogin'}">Login</AppLink>

        <AppLink to="http://vuejs.org">vue.js</AppLink>

    </div>
</template>

<script>
    import sourceData from '@/data.json';
    //import {ref} from 'vue';
    //import AppLink from '@/components/AppLink.vue';

    export default {
        data() {
            return {
                destinations: sourceData.destinations,
                userLoggedIn: false
            }
        },
        methods: {
            isUserLoggedIn() {
                if (window.user) {
                    this.userLoggedIn = true;
                } else {
                    this.userLoggedIn = false;
                };
                console.log('user logged in: ', this.userLoggedIn);
                return this.userLoggedIn;
            }
        }
    }
</script>
