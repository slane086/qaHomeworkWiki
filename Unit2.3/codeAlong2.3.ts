console.log("\nFirst Object\n")
//First Object
var myPerson = {
    firstName: "John",
    lastName: "Marston",
    age: "38"
};

console.log(`person: \n name: "${myPerson.firstName} ${myPerson.lastName}" \n age: ${myPerson.age}`)

console.log("\nOurArray\n")
//icecream array
var iceCreamFlavors: Array<string> = [
    "Mint Chocolate Chip",
    "Cookies & Cream",
    "Butter Pecan",
    "Vanilla",
    "Chocolate"
]

//icecream forEach loop
iceCreamFlavors.forEach((flavor, i) => {
    console.log(`${i + 1}, ${flavor}`)
})

console.log("\nArray of Objects\n")
//People Object Array
var people = [
    {
        firstName: "Arthur",
        lastName: "Morgan",
        age: 36
    },
    {
        firstName: "John",
        lastName: "Marston",
        age: 25
    },
    {
        firstName: "Sadie",
        lastName: "Adler",
        age: 25
}
]

people.forEach((person) => {
    console.log(`Person: \n "${person.firstName} ${person.lastName}"\n Age: ${person.age}`)
})

console.log("\nAn object with an array\n")
//Person Object with an array of their fav ice creams
var myPersonWithAnArray = {
    firstName: "Bob",
    lastName: "Builder",
    age: "1000",
    favoriteIceCreams: [
        "Mint Chip",
        "Butter Pecan",
        "Cookies and Cream",
        "Vanilla",
        "Chocolate"
    ]
}

        console.log(`Person:\n name: "${myPersonWithAnArray.firstName} ${myPersonWithAnArray.lastName}"`)
        console.log(`Age: \n ${myPersonWithAnArray.age}`)
        console.log(`Favorite Ice Cream Flavors\n`)

        myPersonWithAnArray.favoriteIceCreams.forEach((flavor) => {
            console.log(`${flavor}`)
        })
    


