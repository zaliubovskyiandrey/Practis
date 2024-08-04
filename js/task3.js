/**
 *? Напишіть ф-цію calcTotalPrice(stones, stonesName),
 *? яка приймає масив об'єктів та
 *? рядок під назвою каменю.
 *? Функція вважає та повертає загальну вартість каменів
 *? з таким ім'ям, ціною та кількістю з об'єкта
 */
const stones = [
  { name: "Смарагд", price: 1300, quantity: 4 },
  { name: "Діамант", price: 2700, quantity: 6 },
  { name: "Сапфір", price: 400, quantity: 7 },
  { name: "Щебінь", price: 150, quantity: 100 },
];

function calcTotalPrice(stonesArray, stonesName) {
  for (const ston of stonesArray) {
    if (ston.name === stonesName) {
      console.log(ston);
      return ston.price * ston.quantity;
    }
  }
  return "Камень відсутній ";
}
console.log(calcTotalPrice(stones, "Щебінь"));
console.log(calcTotalPrice(stones, "Сапфір"));
console.log(calcTotalPrice(stones, "123"));
console.log(calcTotalPrice(stones, "Сапфір"));
