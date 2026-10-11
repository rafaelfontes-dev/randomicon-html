export function getRandomInt( min, max ) {

    // nota: resultado inclui tanto o número mínimo como o máximo!

    min = Math.trunc( min );
    max = Math.trunc( max );

    if( min > max ){
        let aux = max; max = min; min = aux;
    }

    let valuesDiff = Math.abs( max - min );

    let rndBuffer = new Uint32Array( 1 );

    // um método menos previsível que o Math.random()
    crypto.getRandomValues( rndBuffer );

    let rnd = rndBuffer[0] % ( valuesDiff + 1 );

    //return min + parseInt( Math.random() * Number( max - min + 1 ) );
    return min + rnd;

}

export function getRandomBool() {

    return getRandomInt(0,1) == 1;

}

export function getRandomIntArray( min, max ) {

    min = Math.trunc( min );
    max = Math.trunc( max );

    if( min > max ){
        let aux = max; max = min; min = aux;
    }

    const array = [];
    const arraySize = Math.abs( max - min + 1 );
    let rnd = 0;

    for( let i = 0; i < arraySize; i++ ) {
        do {
            rnd = getRandomInt( min, max );
        } while( array.includes( rnd ) );

        array.push( rnd );
    }

    return array;

}