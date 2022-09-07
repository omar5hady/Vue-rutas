//Se importa createRouter y CreateWebHashHistory del paquete vue-router
import {createRouter, createWebHashHistory} from 'vue-router'
//Se importan las paginas vue que administrara
// import AboutPage from "@/modules/pokemon/pages/AboutPage"
// import ListPage from "@/modules/pokemon/pages/ListPage"
// import PokemonPage from "@/modules/pokemon/pages/PokemonPage"
import NotFound from '@/modules/shared/pages/NotPageFound'
import isAutenticatedGuard from './auth-guard'
//Se crea un arreglo de paths con el componente al que apuntaran
const routes = [
    { 
        path: '/', 
        redirect :'/pokemon'
    },
    //Pokemon Layout
    {
        path: '/pokemon',
        name: 'pokemon',
        component: () => import( /*webpackChunkName: "PokemonLayout"*/ '@/modules/pokemon/layouts/PokemonLayout'),
        children: [
            { 
                path: 'home', 
                name: 'pokemon-home',
                component: () => import( /*webpackChunkName: "ListPage"*/ '../modules/pokemon/pages/ListPage')
            },
            { 
                path: 'about', 
                //component: AboutPage 
                name: 'pokemon-about',
                component: () => import( /*webpackChunkName: "AboutPage"*/ '../modules/pokemon/pages/AboutPage')
            },
            { 
                path: 'pokemonid/:id', 
                name: 'pokemon-id',
                component: () => import( /*webpackChunkName: "PokemonPage"*/ '../modules/pokemon/pages/PokemonPage'),
                props: ( route ) => {
                    const id = Number(route.params.id)
                    return isNaN( id ) ? { id:1 } : { id }
                }
            },
            { 
                path: '', 
                redirect : { name: 'pokemon-home' }
            },
        ]
    },

    //DBZ Layout
    {
        path: '/dbz',
        name: 'dbz',
        beforeEnter: [ isAutenticatedGuard ],
        component: () => import( /*webpackChunkName: "DBZLayout"*/ '@/modules/dbz/layouts/DragonBallLayout'),
        children: [
            {
                path: 'characters',
                name :'dbz-characters',
                component: () => import( /*webpackChunkName: "DBZ Characters"*/ '@/modules/dbz/pages/Characters')
            },
            {
                path: 'about',
                name :'dbz-about',
                component: () => import( /*webpackChunkName: "DBZ About"*/ '@/modules/dbz/pages/About')
            },
            { 
                path: '', 
                redirect : { name: 'dbz-about' }
            },
        ]
    },
    
    { 
        path: '/:pathMatch(.*)', 
        component: NotFound 
        // redirect: '/home'
    },
]
//Se crea el router que administrara esas rutas
const router = createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

//Guard global sincrono
// router.beforeEach( (to, from, next) => {
//     const random = Math.random() * 100
//     if(random > 50){
//         console.log('Autenticado')
//         next()
//     }
//     else{
//         console.log('Bloqueado por el beforeEach guard')
//         next({name: 'dbz-about'})
//     }
        
// })

// const canAccess = () =>{
//     return new Promise( resolve => {
//         const random = Math.random() * 100
//         if(random > 50){
            
//             console.log('Autenticado - canAccess')
//             resolve(true)
//         }
//         else{
//             console.log('Bloqueado por el beforeEach guard - canAccess')
//             resolve(false)
//         }
//     })
// }

// router.beforeEach( async(to,from, next) => {

//     const autorized = await canAccess()

//     autorized 
//         ? next() : next({ name: 'dbz-about'})

// })

//Se exporta
export default router 