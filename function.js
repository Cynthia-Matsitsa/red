//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2
function multiplication (num1){
    let numbers = num1 ;
    num1.forEach((num) =>{
        console.log(num*2);

    });

    
}
multiplication([4,5,6,7]);
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function arrnum(arr){
    let numbersArray = arr.slice(0,4).map(item=>item*8);
    let numberArray = arr.slice(-2).map(item=>+5);
    let numbersarry = numbersArray.concat(numberArray);
    console.log(numberArray);
}
arrnum([4,6,8,9,5,9]);
//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function Cars(array){
    const cars=["Rangerover","Pick-up","Mercedes-Benz"]
    console.log(cars.reverse().sort());
};
Cars();
//Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order
function employee(){
    let object = ['id','name','salary'];
    const newObject = [];
    newObject.push(object.reverse());
    console.log(newObject);
};
employee();

    

