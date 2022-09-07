<template>
    <div>
        <!-- <router-link :to="{ name:'home' }">Pokemon list</router-link>
        <router-link :to="{ name:'pokemon-id', params: { id: 150 }}">Pokemon por Id</router-link>
        <router-link :to="{ name:'about' }">About</router-link> -->
        <CustomLink
            v-for="link in links"
            :key="link.to"
            :link="link"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    data(){
        return{
            links : [
                { to: 'pokemon-home', name: 'Pokemons'},
                { to: 'pokemon-id', name: 'Por Id', id: 140},
                { to: 'pokemon-about', name: 'About'},

                { to: 'dbz-characters', name: 'Personajes'},
                { to: 'dbz-about', name: 'About'},

                { to: 'https://google.com', name: 'Google'},
            ]
        }
    },
    components:{
        CustomLink : defineAsyncComponent( () => import('./CustomLink.vue'))
    }
}
</script>

<style scoped>

    div{
        padding: 0 40px;

    }

    div a{
        font-weight: bold;
        color: #2c3e50;
        margin: 0 20px;
    }

    /* a.router-link-exact-active{
        color: #42B983;
    } */

</style>>