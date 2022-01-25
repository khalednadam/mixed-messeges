console.log("--Welcome to mixed messages generator--\nFood edition");
const subject = ["I", "He", "She", "We", "They"];
const food = ["pizza", "lasagna", "kubba", "a burger", "shakria", "sushi", "a chicken wrap", "fried chicken", "steak", "shawarma"];
const sauce = ["cheese sauce", "ketchup", "mayo", "burger sauce", "remoulade sauce", "sweet chilli sauce", "shrimp sauce", "barbecue sauce"];
const drinks = ["coke", "pepsi", "milkshake", "smoothie", "fanta", "iced tea", "water"];
const dessert = ["souffle", "lava cake", "chocolate cake", "chocolate waffle", "trileches", "cinnamon rolles", "pudding", "muhallabia", "kunafa", "baklava"];
//generates a random index number
const randomPick = arr =>{
    let random = Math.floor(Math.random() * arr.length);
    return random;
}
let randSubject = subject[randomPick(subject)];
console.log(`${randSubject} had ${food[randomPick(food)]} with ${sauce[randomPick(sauce)]} and ${drinks[randomPick(drinks)]} on the side
and then ${randSubject} had ${dessert[randomPick(dessert)]} for dessert.`);