

/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
console.log(tellFortune('software engineer', 'Jordan', 'Alice', 3))
function tellFortune(x,y,z,n){
    let str='You will be a '+ x +' in '+ y +', and married to '+ z + ' with '+ n +' kids.'
    return str 
}

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
console.log(calculateDogAge(1))
function calculateDogAge(n){
    let age = n*7 ;
    let str ='Your doggie is '+ age + ' years old in dog years!';
    return str
}

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
console.log(calculateSupply(30, 3))
function calculateSupply(age,b){
    let num = (100-age)*365*b
    let str='You will need '+ num + ' cups of tea to last you until the ripe old age of 100'
    return str 
}

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
console.log(greet("Ruba"))
function greet(name){
    let str='Hello ' + name
    return str
}

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/
function double(cat) { // x not defined
    // return 2 * x;
    return 2 * cat;
  }
  
  function double(x) { // function parameters should be variables the values received when it is invoked.
    return 2 * 7;
  }
  
  function double(x) { // function parameters should be variables the values received when it is invoked.
    return 2 * x; // x NaN 
  }


/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1(x) {
    return 2 * x ;
  }
  
function double2 (x){
  return 2 * x;
  }
  
function double3(x){
    return 2 * x;
}
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
console.log(cube(4))
console.log(cube(-4))
function cube(num){
    return (num**3)
}

/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
console.log('multi = '+multiply(3,4))
console.log('multi = '+multiply(5,-4))
function multiply(x,y){
    return x*y
}

/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
console.log(canIGetADrivingLicense(17))
console.log(canIGetADrivingLicense(20))
console.log(canIGetADrivingLicense(25))
function canIGetADrivingLicense(age){
    if(age>=20){
        return 'Yes you can'
    }
    else{
        let x=20-age
        return 'please come back after '+ x +' years to get one'
    }
}

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
console.log(sameLength("tree","clue"))
console.log(sameLength("tree","car"))
function sameLength(s1,s2){
    if(s1.length==s2.length){
        return 'True'
    }
    else{
        return 'False'
    }
}
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
console.log(largerNubmer(5,6))
console.log(largerNubmer(5,1))
function largerNubmer(n1,n2){
    if(n1>=n2){
        return n1
    }
    else{
        return n2
    }
}

/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
console.log('smaller number: '+smallerNubmer(8,6,7))
console.log('smaller number: '+smallerNubmer(5,99,34))
console.log('smaller number: '+smallerNubmer(5,99,3))
console.log('smaller number: '+smallerNubmer(5,3,3))
function smallerNubmer(x,y,z){
    if(x<=y){
        if(x<=z){
            return x
        }
        else{
            return z
        }
    }
    else if(y<=x){
        if(y<=z){
            return y
        }
        else{
            return z
        }
    }
    else if(z<=x){
        if(z<=y){
            return z
        }
        else{
            return y
        }
    }
}
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
console.log(shorterString("air","school","car","by","github"))
console.log(shorterString("air","tr","car","by","github"))
console.log(shorterString("by","tr","car","air","github"))
function shorterString(s1,s2,s3,s4,s5){
    if(s1.length<=s2.length && s1.length<=s3.length && s1.length<=s4.length && s1.length<=s5.length){
        return s1
    }
    else if(s2.length<=s1.length && s2.length<=s3.length && s2.length<=s4.length && s2.length<=s5.length){
        return s2
    }
    else if(s3.length<=s2.length && s3.length<=s1.length && s3.length<=s4.length && s3.length<=s5.length){
        return s3
    }
    else if(s4.length<=s2.length && s4.length<=s3.length && s4.length<=s1.length && s4.length<=s5.length){
        return s4
    }
    else if(s5.length<=s2.length && s5.length<=s3.length && s5.length<=s4.length && s5.length<=s1.length){
        return s5
    }
}


/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
console.log(longerString("air","school","car","github"))
console.log(longerString("air","schoo","car","github"))
console.log(longerString("air","school","carssss","github"))
function longerString(s1,s2,s3,s4){
    if(s1.length>=s2.length && s1.length>=s3.length && s1.length>=s4.length){
        return s1
    }
    else if(s2.length>=s1.length && s2.length>=s3.length && s2.length>=s4.length){
        return s2
    }
    else if(s3.length>=s1.length && s3.length>=s2.length && s3.length>=s4.length){
        return s3
    }
    else if(s4.length>=s1.length && s4.length>=s2.length && s4.length>=s3.length){
        return s4
    }
}

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
console.log('is even : '+isEven(1))
console.log(isEven(-2))
console.log(isEven(0))
function isEven(num){
    if(num%2==0){
        return 'True'
    }
    else{
        return 'False'
    }
}

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
console.log('is odd: '+isOdd(4))
console.log(isOdd(-3))
console.log(isOdd(0))
function isOdd(n){
    if(n%2!=0){
        return 'True'
    }
    else{
        return 'False'
    }
}

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
console.log('Positive: '+positive(4))
console.log(positive(-6))
console.log(positive(0))
function positive(num){
    if(num>=0){
        return num
    }
    else{
        return num+(num*-2)
    }
}

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
console.log(fullName("Ruba", "Almasri"))
function fullName(fname,lname){
    return fname + ' ' + lname
}

/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
console.log('avg: '+average(1,2,3,4,5))
console.log(average(5,7,9,3,5))
console.log(average(5,-7,9,-3,5))
function average(a,b,c,d,e){
    return (a+b+c+d+e)/5
}

/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
console.log('random: '+ randomNumber())
console.log('random: '+ randomNumber())
function randomNumber(){
    return (Math.random())
}
/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
console.log(randomBetweenNumbers(1,8))
console.log(randomBetweenNumbers(3,100))
function randomBetweenNumbers(x,y){
    return (Math.random()*(y-x)+1)
}

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
console.log(scoreInUniversty(96))
console.log(scoreInUniversty(60))
console.log(scoreInUniversty(10))
function scoreInUniversty(x){
    if(x<=100 && x>=95){
        return 'A'
    }
    else if(x<=94 && x>=85){
        return 'B'
    }
    else if(x<=84 && x>=70){
        return 'C'
    }
    else if(x<=69 && x>=50){
        return 'D'
    }
    else if(x<=49 && x>=0){
        return 'F'
    }
}

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let count=0;
console.log('counter: '+ counter())
console.log(counter())
console.log(counter())
console.log(counter())
function counter(){
    return count++
}

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
console.log(resetCounter())
console.log(counter())
console.log(counter())
console.log(counter())
console.log(resetCounter())
console.log(counter())
console.log(counter())
function resetCounter(){
    let c=count-1
    count=0
    return ( c +' and the counter reset now')
}