// import {obtenerHeroesArr, obtenerHeroeAwait} from './js/await';

// const heroes = obtenerHeroesArr(); // regresa una promesa
// console.log( heroes );

// console.time('await');

// obtenerHeroeAwait('capi23')
//     .then( heroes => {

//         console.log( heroes );

//         console.timeEnd('await');
//     }); // espera que la funcion se complete y puede tardar segun eso







import { heroeIfAwait, heroesCiclo } from './js/await';

heroesCiclo();

heroeIfAwait('iron');


