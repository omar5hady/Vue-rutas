<template>
    <h1>About Pokemon</h1>
    <hr>
    <h2>{{name}}</h2>
    <button @click="changeName()">Cambiar nombre</button>
</template>

<script>
    export default {
        data(){
            return{
                name: 'Omar Shady'
            }
        },
        methods: {
            changeName(){
                this.name = 'SHADY'
            },
        },
        
        beforeCreate() { //Aqui no se creado el componente, no se creado el data
            console.log('beforeCreate')
        },
        created() {//Aqui ya se creo el data
            //Peticiones HTTP
            console.log('created')
        },
        beforeMount() {
            console.log('beforeMount')
        },
        mounted() {
            console.log('mounted')
        },
        beforeUpdate() {
            console.log('beforeUpdate')
        },
        updated() {
            console.log('updated')
        },
        activated() {
            console.log('activated')
        },
        deactivated() { 
            console.log('deactivated')
        },
        beforeUnmount() {
            console.log('beforeUnmount')
        },
        unmounted() {
            console.log('unmounted')
        },
        errorCaptured () {
            console.log('errorCaptured ')
        },
        renderTracked() {
            console.log('renderTracked')
        },
        renderTriggered() {
            console.log('renderTriggered')
        },

    }
</script>