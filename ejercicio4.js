/**
 * Funcion que recibe un número con decimales y devuelve un objeto 
 * con los euros(parte entera) y los céntimos(parte decimal).
 * 
 * Ej: precioEnEuros(2.99) -> devuelve {euros: 2, centimos:99 }
 *     precioEnEuros(4)-> devuelve {euros:2, centimos:0 }
 * 
 */

function precioEnEuros(importe) {

    let calderilla = importe * 100
    let centimos = calderilla % 100
    let euros = (calderilla - centimos) / 100

    return { euros, centimos }
}

// precioEnEuros()




module.exports = precioEnEuros