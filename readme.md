# IFCD0210: UT2 Javascript- Parcial 2

## Instrucciones
- Para entregar: hacer commit de todos los cambios(no es necesario hacer commit de cada ejercicio por separado)
- ⚠️ No eliminar la última linea de cada ejercicio
- Se aconseja ir probando cada ejercicio por separado comentando el resto en `index.html` y descomentando el que se quiera probar

## Ejercicios

### Función 1
Función que recibe un nombre y devuelve el saludo 'hola ' y el nombre que se le ha pasado. 
En caso de no recibir nada, devuelve hola desconocid@

Ej:  
```js
saludar('Pepe') // -> devuelve 'hola Pepe'
saludar()  // -> devuelve 'hola desconocid@'
```

### Función 2
Función que recibe la base y la altura de un triángulo  y devuelve el area  `(base x altura) / 2`

Ej:
```js
areaTriangulo(2,5) // -> devuelve 5
areaTriangulo(8,5) // -> devuelve 20
```
### Función 3

Función que recibe un array y si contiene 5 o más elementos devuelve true,
si es menor de 5, devuelve cuántos elementos faltan para llegar a 5

Ej:
```js
cincoElementos([1,2,3]) // -> devuelve 2
cincoElementos([1,2,3,4,5,6]) // -> devuelve true
cincoElementos(['hola','mundo']) // -> devuelve 3
```

### Función 4
Funcion que recibe un número con decimales y devuelve un objeto 
con los euros(parte entera) y los céntimos(parte decimal).

Ej:
```js
precioEnEuros(2.99) // -> devuelve {euros: 2, centimos:99 }
precioEnEuros(4) // -> devuelve {euros:2, centimos:0 }
```