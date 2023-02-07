// Stwórz plik "main.js".

// Napisz funkcję, która przyjmuje jako parametry dwie liczby, które przekażesz podczas wywoływania funkcji.

// Funkcja ma dodawać, odejmować i mnożyć liczby przekazane do parametrów i wyświetlać w konsoli następujące stringi:

// 1. "Wynik dodawania wynosi x"
// 2. "Wynik odejmowania wynosi x"
// 3. "Wynik mnożenia wynosi x"

// Gdzie x jest wynikiem danego działania.

// Natomiast jeżeli wynikiem jest liczba ujemna, w konsoli powinien pojawić się string:
// "Wynik jest nieprawidłowy"


function numbers (x, y) {
 let suma = x +y; 
 if (suma > 0 ) {
    console.log('Wynik dodawania wynosi ' + suma);
 } else {
    console.log('Wynik jest nieprawidłowy');
 }
}
numbers(14,28);

function multiplication (a, b) {
    let suma = a *b; 
    if (suma > 0 ) {
       console.log('Wynik dodawania wynosi ' + suma);
    } else {
       console.log('Wynik jest nieprawidłowy');
    }
   }
   multiplication(14,28);

   function substraction (c, d) {
    let suma = c -d; 
    if (suma > 0 ) {
       console.log('Wynik dodawania wynosi ' + suma);
    } else {
       console.log('Wynik jest nieprawidłowy');
    }
   }
   substraction(14,28);