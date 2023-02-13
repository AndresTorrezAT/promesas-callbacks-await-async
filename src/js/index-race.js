import { promesaLenta, promesaMedia, promesaRapida} from './js/promesas';

promesaLenta.then( console.log );
promesaMedia.then( mensaje => console.log(mensaje) );
promesaRapida.then( console.log );

Promise.race([ promesaLenta, promesaMedia, promesaRapida]) // EJECUTA LA PROMESA MAS RAPIDA - RESOLVE O REJECT
        .then( console.log )
        .catch( console.warn );