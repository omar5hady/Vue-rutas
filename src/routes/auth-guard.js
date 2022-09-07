const isAutenticatedGuard = async (to, from, next) => {
    return new Promise( () => {
        const random = Math.random() * 100

        if(random > 50){
            console.log('Esta autenticado')
            next()
        }
        else{
            console.log('Bloqueado por isAutenticatedGuard')
            next({name: 'pokemon-home'})
        }
    })
}

export default isAutenticatedGuard