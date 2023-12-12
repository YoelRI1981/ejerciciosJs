const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Salad", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let counter=0

for (let i = 0; i < foodSchedule.length; i++) {
    const food= foodSchedule[i]
  if (!food.isVegan) {
    food.isVegan=true
    food.name=fruits[counter]
    counter++
  }
}

console.log(foodSchedule);

