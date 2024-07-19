/**
 * Ejercicio 1:
 * 
 * Función que recibe un nombre y devuelve el saludo 'hola ' y el nombre que se le ha pasado. 
 * En caso de no recibir nada, devuelve hola desconocid@
 * 
 * Ej:  saludar('Pepe') -> devuelve 'hola Pepe'
 *      saludar() -> devuelve 'hola desconocid@'
 * 
 * 
 */

function saludar(name = 'desconocid@') {

    return 'hola ' + name
}





//no borrar la siguiente linea
module.exports = saludar