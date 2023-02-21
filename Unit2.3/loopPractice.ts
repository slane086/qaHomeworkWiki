var todo: Array<string> = [
    "Wash the Car",
    "Get Groceries",
    "Go to the Gym",
    "Grade Homework"
]
// for declare variable > statement to check > increase or decrease the variable
for(let i = 0;  i < todo.length; i++){
    console.log(`Todo #${i + 1}: ${todo[i]}`);
}