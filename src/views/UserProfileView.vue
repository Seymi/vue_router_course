<template>
    <div>
        <h1>Profildaten</h1>
        <p>Username: {{ user.userName }}</p>
        <p>Vorname: {{ user.userFirstName }}</p>
        <p>Familienname: {{ user.userFamilyName }}</p>
        <p>Email Adresse: {{ user.userEmailAdress }}</p>
        <div id="user-adresse">
            <fieldset>
                <legend>Adresse</legend>
                <p>Postleitzahl: {{ user.userAdressPlz }}</p>
                <p>Ort: {{ user.userAdressCity }}</p>
                <p>Straße: {{ user.userAdressStreet }}</p>
            </fieldset>
        </div>
    </div>
</template>

<script>
import userProfile from '@/user_profile.json';

export default {
    components: { userProfile },
    props: {
        userId: { type: Number, required: true }
    },
    data() {
      return {
        userProfile: userProfile.users,
      }
    },
    computed: {
        user() {
            return this.userProfile.find( user => user.userId === this.userId );
        }
    },
    methods: {

    }
}

</script>
