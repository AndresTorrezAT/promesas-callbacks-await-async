import { buscarHeroe as buscarHeroeCallback} from './js/callbacks';
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId1 = 'capi1'; 
const heroeId2 = 'iron';

// CALLBACKS - Asyncrono - en Orden de secuencia

// buscarHeroe( heroeId1, ( err, heroe1 ) => {
    
//     if ( err ) { return console.error( err ); }

//     buscarHeroe( heroeId2, ( err, heroe2 ) => {

//         if ( err ) { return console.error( err ); }

//         console.log(`Enviando a ${ heroe1.nombre } y ${heroe2.nombre } a la mision.`);

//     });

// });



// PROMESAS - Syncrono - se sale del orden y se ejecuta en paralelo y luego regresa

// buscarHeroe( heroeId1 ).then( heroe1 => {
//     // console.log(`Enviando a ${ heroe1.nombre } a la mision.`);
//     buscarHeroe( heroeId2 ).then( heroe2 => {
//         console.log(`Enviando a ${ heroe1.nombre } y ${heroe2.nombre } a la mision.`);
//     });
// });


// PROMESAS ALL - Ejecutar varias promesas

Promise.all([ buscarHeroe(heroeId1), buscarHeroe(heroeId2) ])
    // .then( heroes => { // Opcion 1 - Normal
    .then( ([heroe1, heroe2]) => { // Opcion 2 - Con Decestructuracion

    // console.log(`Enviando a ${ heroes[0].nombre } y ${heroes[1].nombre } a la mision.`);
    console.log(`Enviando a ${ heroe1.nombre } y ${heroe2.nombre } a la mision.`);

}).catch( err => {

    alert(err)

}).finally( () => {
    console.log('Se termino el promise.all');
});

console.log('Fin de programa');