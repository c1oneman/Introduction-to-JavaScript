/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
const votingAge = 18;
var age = 19;
if (age >= votingAge) {
    console.log(true);
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
var taskb = 4;
var taskb2 = 2;
if (taskb < 5) {
    taskb = taskb2 * taskb;
}
console.log(taskb);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
var string = "1998";
console.log(parseInt(string));



//Task d: Write a function to multiply a*b 

var a = 4;
var b = 2;
console.log(multiply(a, b));
function multiply(a, b) {
    return a*b;
}



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 
console.log(toDogYears(age));
function toDogYears(age) {
    return age*7;
}



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
var dogAgeYears = 1;
var dogWeightLbs = 15;
console.log(calcDogFood(dogAgeYears,dogWeightLbs));
function calcDogFood(age, weight) {
    if (age >= 1) {
        if (dogWeightLbs <= 5) {
            return (weight*0.05);
        }
        else if (dogWeightLbs <= 10) {
            return (weight*0.04);
        }
        else if (dogWeightLbs <= 15) {
            return (weight*0.03);
        }
        else {
            return (weight*0.02);
        }
    }
    else {
        var months = age * 12;
        if (months <= 4 && months >= 2) {
            return (weight*0.10);
        }
        else if(months <= 7 && months >= 4) {
            return (weight*0.05);
        }
        else {
            return (weight*0.04);
        }
    }
}



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
var player = "Scissors";
var computer = Math.floor(Math.random() * 3) + 1;
if (player == "Scissors") {
    if (computer == 1 || computer == 3)  {
        console.log("You lost")
    }
    else {
        console.log(player + " beats " + computer)
    }

}
else if (player == "Paper") {
    if (computer == 2 || computer == 3)  {
        console.log("You lost")
    }
    else {
        console.log(player + " beats " + computer)
    }

}
else if (player == "Rock") {
    if (computer == 1 || computer == 2)  {
        console.log("You lost")
    }
    else {
        console.log(player + " beats " + computer)
    }

}
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
console.log(kmToMiles(1))
function kmToMiles(km) {
    return km/1.609
}
//0.621371



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
console.log(ftToCm(1));
function ftToCm(ft) {
    return ft*30.48

}



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  annoyingSong(3);
function annoyingSong(bottles) {
    
    while(bottles > 0) {
        var lessBottles = bottles-1;
        console.log(bottles + " bottles of soda on the wall, " + bottles + " bottles of soda, take one down pass it around " + lessBottles + " bottles of soda on the wall");
        bottles = bottles-1;
    }
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  console.log(grade(76));
function grade(score) {
    if (score >= 90) {
        return "A";
    }
    else if (score >= 80) {
        return "B";
    }
    else if (score >= 70) {
        return "C";
    }
    else if (score >= 60) {
        return "D";
    }
    else {
        return "F";
        }
}

  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





