<template>
    <div>
    <a v-if="isExternal" :href="this.to" target="_blank" rel="noopener" class="external-link"><slot></slot></a>
    <router-link v-else v-bind="$props" class="nav"><slot></slot></router-link>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    props: {
        ...RouterLink.props

    },
    computed: {
        isExternal() {
            return typeof this.to === 'string' && this.to.startsWith('http')
            //return ( typeof this.to === 'string' && this.to.substr(1, 4) ==='http' );
        }
    }
}
</script>
