import { buscarHeroe, buscarHeroeAsync} from './js/promesas';

//  sin async - promesa

buscarHeroe( 'capi' )
        .then( heroe => console.log(heroe) )
        .catch( console.warn);

//  con async - promesa
buscarHeroeAsync( 'iron' )
        .then( heroe => console.log(heroe) )
        .catch( console.warn);