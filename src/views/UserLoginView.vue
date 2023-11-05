<template>
    <div>
        <form class="form" @submit.prevent="login">
            <h1>User Login</h1>
            <label for="username">Username</label>
            <input v-model="username.value" name="username" type="text" class="input">
            <label for="password">Passwort</label>
            <input v-model="password" name="password" type="password" class="input">

            <button class="btn">Login</button>
        </form>
    </div>
</template>

<script>
    export default {
        props: {

        },
        data() {
            return {
                username: {type: String, required: true},
                password: {type: String, required: true},
            }
        },
        methods: {
            login() {
                window.user = this.username;
                const redirectPath = this.$route.query.redirect || '/protected';
                this.$router.push(redirectPath);
            }
        }
    }

</script>
