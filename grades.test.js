const saludar = require('./ejercicio1')
const areaTriangulo = require('./ejercicio2')
const cincoElementos = require('./ejercicio3')
const precioEnEuros = require('./ejercicio4')

describe('exercises', () => {

    test('exercise1', () => {
        expect(saludar().toLowerCase().trimEnd().slice(0, -1)).toBe('hola desconocid')
        expect(saludar('señor').toLowerCase().trimEnd()).toBe('hola señor')
    })
    test('exercise2', () => {
        expect(areaTriangulo(2, 5)).toBe(5)
    })
    test('exercise3', () => {
        expect(cincoElementos([1, 2, 3])).toBe(2)
        expect(cincoElementos([1, 2, 3, 4, 5])).toBe(true)
        expect(cincoElementos([1, 2, 3, 4, 5, 6])).toBe(true)

    })
    test('exercise4', () => {
        const obj = precioEnEuros(2.99)
        const keys = []
        for (const key in obj) {
            keys.push(key)
        }
        expect(parseInt(obj[keys[0]])).toBe(2)
        expect(parseInt(obj[keys[1]])).toBe(99)

    })

})