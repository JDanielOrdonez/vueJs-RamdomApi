const app = Vue.createApp({
    data() {//Funcion
        return {//en este caso regresa un objeto
            nombre: 'Jesus Daniel',
            apellido: 'Dominguez Ordoñez',
            email: 'jesusordo00@gmail.com',
            title:'Mr',
            genero: 'male',
            foto: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    },    
    //los metodos seran las funciones que tenga nuestra app
    methods: {//Aqui podemos poner todas nuestras funciones
        async cambiarUsuario() {//funcion:puede ser una funcion normal o una asincrona(async await)
        
            //las demas lineas se ejecutaran hasta que la primera y la segunda linea terminen(await:promesas)
            const res = await fetch('https://randomuser.me/api/');

            //results se declara entre llaves porque lo que se reciba sera un objeto
            const { results } = await res.json();//objeto. recibimos el objeto json del api ramdomuser
            
            console.log(results)
            
            //Al dar clic al boton, las variables se reescriben y el usuario cambia
            this.nombre= results[0].name.first//pasas la posicion 0 porque devuelve un json dentro de un vector
            this.apellido= results[0].name.last
            this.title= results[0].name.title
            this.email= results[0].email
            this.genero= results[0].gender
            this.foto= results[0].picture.large
        }
        
    }
})

app.mount('#app');


// Destructuring, o destructuración en un lenguaje más hispanizado, 
// es una nueva característica de ES6 para Javascript que nos da la 
// posibilidad de poder coger los datos de objetos o arrays directamente
//  y de manera múltiple, para extraerlos a variables o constantes.