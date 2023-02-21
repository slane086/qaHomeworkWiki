var numberList: Array<number> = [56, 85]

var animalsList: Array<string> = [
    "Elephant", 
    "Lion",
    "Tiger",
    "Bear",
    "Oh My"
]

numbersList.push(70)
numbersList.push(80)
numbersList.push(90)

console.log("The First List Is:", numberList)
console.log("The item at the end of the second list is:", animalsList.pop)
console.log("The remaining item on this list are:", animalsList)
console.log("This should be 70", numbersList[2])
console.log("This should be an elephant", animalsList[0])()