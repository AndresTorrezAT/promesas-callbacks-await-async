 import {buscarHeroeAsync, buscarHeroe} from './promesas';

 const heroesIds =['capi','iron','spider'];
 const heroesPromesas = heroesIds.map( id => buscarHeroe(id) );

 export const obtenerHeroesArr = async () => {


    return await Promise.all( heroesIds.map( buscarHeroe ) ); // amp devuelve un array convertido


    // const heroesArr = [];

    // for ( const id of heroesIds ) { // id es como la instancia que extrae un valor del array

        

    //     // buscarHeroeAsync( id ).then( heroe => heroesArr.push( heroe ) );



    //     // const heroe =  await buscarHeroe( id ); // el await espera que la funcion se complete antes de seguir con la siguiente linea
    //     // heroesArr.push( heroe );
    //     // no es bueno el await dentro del for



    //     // varias promesas al mismo timepo
    //     // heroesArr.push(buscarHeroe( id ));
    // }

    // return heroesArr;

    // return await Promise.all( heroesArr ); // todas la promesas se ejecutan al mismo tiempo

 };


 export const obtenerHeroeAwait = async ( id ) => {

    try {
        
        const heroe =  await buscarHeroeAsync ( id );
        return heroe;

    } catch (err) {

        console.log('CATCH!!!');

        return {
            nombre: 'Sin nombre',
            poder: 'Sin poder'
        };
        
    }



 }


 export const heroesCiclo = async () => {

    console.time('heroesCiclo');
    
    // OPCION 1
    // const heroes = await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log(heroe) );
 
 
    // el await espera la respuesta exitosa de la promesa

    // OPCION 2
    // for await(const heroe of heroesPromesas) {
    //     console.log(heroe);
    // }


    //OPCION 3 -- asincrono
    heroesPromesas.forEach( async(p) => console.log( await p ));

    console.timeEnd('heroesCiclo');
 }

 export const heroeIfAwait = async(id) => {

    if ( (await buscarHeroeAsync(id)).nombre == 'Ironman') {

        console.log('Es el mejor de todos');

    } else {

        console.log('Naaa');

    }
 }