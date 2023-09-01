// algortimo de busqueda usando el metodo de burbuja
// 1. Comparar el primer elemento con el segundo
// 2. Si el primer elemento es mayor que el segundo, se intercambian.
// 3. Luego se compara el segundo con el tercero y se intercambian si el segundo es mayor que el tercero.
// 4. Asi sucesivamente hasta terminar con todos los elementos.
// 5. Al finalizar la primera iteración, el elemento mayor estará en la última posición.
// 6. Se repite el proceso, pero esta vez con el penúltimo elemento, y así sucesivamente.
// 7. Se repite hasta que no se requieran más intercambios, lo cual significa que el arreglo está ordenado.

// Ejemplo: [5, 3, 4, 1, 2]
// 1. [3, 5, 4, 1, 2]
// 2. [3, 4, 5, 1, 2]
// 3. [3, 4, 1, 5, 2]
// 4. [3, 4, 1, 2, 5]
// 5. [3, 1, 4, 2, 5]
// 6. [3, 1, 2, 4, 5]
// 7. [1, 3, 2, 4, 5]
// 8. [1, 2, 3, 4, 5]


// crea un estracto de codigo representando el algoritmo de ordenamiento de burbuja
function bubbleSort(array) {
    // recorre el arreglo
    for (let i = 0; i < array.length; i++) {
        // recorre el arreglo
        for (let j = 0; j < array.length; j++) {
        // compara el elemento actual con el siguiente
        if (array[j] > array[j + 1]) {
            // guarda el elemento actual en una variable temporal
            let temp = array[j];
            // asigna el elemento siguiente al elemento actual
            array[j] = array[j + 1];
            // asigna el elemento actual al elemento siguiente
            array[j + 1] = temp;
        }
        }
    }
    // retorna el arreglo ordenado
    return array;
    }

// crea un arreglo de numeros desordenados
let array = [5, 3, 4, 1, 2];
// imprime el arreglo ordenado
console.log(bubbleSort(array));

// Arreglo de objetos de alumnos
const students = [
    { name: "Eve", grade: 78 },
    { name: "Charlie", grade: 95 },
    { name: "David", grade: 60 },
    { name: "Bob", grade: 70 },
    { name: "Alice", grade: 85 },
    
  ];
  
  // Función para ordenar el arreglo de alumnos por nombre
  function sortStudentsByName(studentsArray) {
    return studentsArray.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  // Llamada a la función para ordenar el arreglo
  const sortedStudentsByName = sortStudentsByName(students);
  
  // Mostrar el arreglo ordenado en la consola
  console.log(sortedStudentsByName);
  