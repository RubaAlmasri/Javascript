console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]
*/
 let arr1=[ 1,7 , 9 , 45 ]

 let arr2=['Str', 'alex','moh','the','fox', 'over' ,'lazy', 'dog']

 console.log(arr1)
 console.log(arr2)

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
// index of banana: 1
// index of tomato: 0
var fruits=["Tomato","Banana","Watermelon"];
console.log("index of Tomato: "+ fruits.indexOf('Tomato'));
console.log("index of Banana: "+ fruits.indexOf('Banana'));

/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
// document.write("Q3"+'<br>');
let food=['shawermah','mansaf','spaghetti','Potato','pizza'];
let sport=['swimming','Basketball','skating'];
let movie=['frozen','antman','spiderman'];
console.log(food)
console.log(sport)
console.log(movie)


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
console.log(firstOfArray([1,4,5]));
console.log(firstOfArray(["t","u","g","x"]));
function firstOfArray(arr)
{
    return arr[0];
}


/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the first element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
console.log(lastOfArray([1,4,5]));
console.log(lastOfArray(["t","u","g","x"]));
function lastOfArray(arr)
{
    return arr[arr.length-1];
}

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
array.shift()
array.shift()
array.shift()
array.push(10)
array.unshift(8)
array.unshift(6)
array.unshift(4)
array.unshift(3)
array.unshift(1)
console.log(array)



/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [5,9,-7,3.5]
console.log(array2.shift())
console.log(array2.pop())
console.log(array2.push(10))
console.log(array2.unshift(-8))
console.log(array2)

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
console.log(middleOfArray([1,4,5]));
console.log(middleOfArray(["t","u","g","x"]));
function middleOfArray(arr)
{
    let mid= Math.floor(arr.length / 2) ;
    if (arr.length%2==0){
        return ("middle elements in ['t','u','g','x']: " +arr[mid-1]+"  and  "+arr[mid] );
    }
    else{
        return ("middle element in [1,4,5]: " + arr[mid]);
    }
}

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
animals[0]='zebra'
animals[1]='elephant'
var nums= [1,2,3,8,9]
nums[0]=5
nums[1]=-22
nums[2]=3.5
nums[3]=44
nums[4]=98
nums[5]=44
console.log(animals)
console.log(nums)

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
var nums= [1,2,3,8,9]
console.log(indexOfArray(nums,3))
console.log(indexOfArray(nums,1))
console.log(indexOfArray(nums,4))

function indexOfArray(arr,index){
    return arr[index]
}

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
var nums= [1,2,3,8,9]
console.log(arrayExceptLast(nums))
function arrayExceptLast(arr){
    arr.pop()
    return arr
}

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
var nums= [1,2,3,8,9]
console.log(addToEnd(nums,55))
function addToEnd(arr,value){
    arr.push(value)
    return arr
}

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
var num= [5,6,7,5,-2]
console.log('sum = '+sumArray1(nums))
console.log('sum = '+sumArray2(num))
function sumArray1(arr){
    let sum = 0 ;
    for(let i=0 ; i<arr.length ; i++)
    {
        sum+=arr[i];
    }
    return sum 
}
function sumArray2(arr){
    let sum = 0 ;
    let i = 0 ;
    while(i<arr.length){
        sum+=arr[i];
        i++;
    }
    return sum 
}

/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
var num= [5,6,7,5,-2]
console.log('minimum value: '+ minInArray1(nums) )
console.log('minimum value: '+ minInArray2(num) )
function minInArray1(arr){
    let min = arr[0];
    for(let i = 1 ; i < arr.length ; i++){
        if(arr[i] < min ){
            min = arr[i];
        }
    }
    return min 
}
function minInArray2(arr){
    let min = arr[0];
    let i = 1 ;
    while(i<arr.length){
        if(arr[i] < min ){
            min = arr[i];
        }
        i++ ;
    }
    return min 
}

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9,8,8]
var num= [5,6,7,5,-2]
console.log(removeFromArray1(nums,8))
console.log(removeFromArray2(num,5))
function removeFromArray1(arr,value){
    for(var i=0 ; i<arr.length ; i++){
        if(arr[i]==value){
            arr.splice(i, 1);
            i--
        }
    }
    return arr;
}
function removeFromArray2(arr,value){
    var i = 0;
    while(i<arr.length){
        if(arr[i]==value){
            arr.splice(i, 1);
            i--
        }
        else{
            i++
        }
    }
    return arr
}

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
var num= [5,6,7,5,-2,-1,0]
console.log(oddArray1(nums))
console.log(oddArray2(num))
function oddArray1(arr){
    for (let i=0 ; i<arr.length ; i++){
        if (arr[i]%2==0){
            arr.splice(i,1)
            i--
        }
    }
    return arr
}
function oddArray2(arr){
    var i = 0;
    while(i<arr.length){
        if(arr[i]%2==0){
            arr.splice(i, 1);
            i--
        }
        else{
            i++
        }
    }
    return arr
}

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [1,2,3,8,9]
var num= [5,6,7,5,-2,-1]
console.log('avg = '+aveArray1(nums))
console.log('avg = '+aveArray2(num))
function aveArray1(arr){
    let sum = 0 ;
    for (let i=0 ; i<arr.length ; i++){
        sum+=arr[i]
    }
    let avg = sum/arr.length
    return avg
}
function aveArray2(arr){
    let i = 0;
    let sum = 0 ;
    while(i<arr.length){
        sum+=arr[i];
        i++
    }
    let avg = sum/arr.length
    return avg
}
/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings= ["alexa","mercer","madrasa","rashed2","emad","hala"]
console.log('the shortest string is : ' + shorterInArray1(strings))
console.log('the shortest string is : ' + shorterInArray2(strings))
function shorterInArray1(arr){
    let leng = arr[0].length ;
    let short = arr[0] ;
    for (let i=1 ; i<arr.length ; i++){
        if(arr[i].length < leng){
            short = arr[i];
            leng = arr[i].length
        }
    }
    return short
}
function shorterInArray2(arr){
    let leng = arr[0].length ;
    let short = arr[0] ;
    let i = 1 ;
    while(i<arr.length){
        if(arr[i].length < leng){
            short = arr[i];
            leng = arr[i].length
        }
        i++
    }
    return short
}

/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var string= "alex mercer madrasa rashed2 emad hala"
console.log('"a" repeat : ' + repeatChar1(string,'a'))
console.log('"A" repeat : ' + repeatChar1(string,'A'))
console.log('"r" repeat : ' + repeatChar2(string,'r'))
function repeatChar1(str,char){
    let repeat = 0 ;
    for (let i=0 ; i<str.length ; i++){
        if(str[i] == char){
            repeat+=1 ;
        }
    }
    return repeat
}
function repeatChar2(str,char){
    let repeat = 0 ;
    let i = 0 ;
    while(i < str.length){
        if(str[i] == char){
            repeat+=1 ;
        }
        i++
    }
    return repeat
}

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var strings= ["alex","mercer","madrasa","rashed2","emad7","hala"]
console.log('the new array contain : ' + evenIndexOddLength1(strings))
console.log('the new array contain : ' + evenIndexOddLength2(strings))
function evenIndexOddLength1(arr){
    let newarray =[];
    for(let i=0 ; i<arr.length ; i++){
        if(i % 2 == 0 && arr[i].length % 2 != 0){
            newarray.push(arr[i])
        }
    }
    return (newarray)
}
function evenIndexOddLength2(arr){
    let newarray =[];
    let i=0;
    while(i<arr.length){
        if(i % 2 == 0 && arr[i].length % 2 != 0){
            newarray.push(arr[i])
        }
        i++
    }
    return (newarray)
}

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [44, 5, 4, 3, 2, 10]
console.log('new array is: ' + powerElementIndex1(nums))
console.log('new array is: ' + powerElementIndex2(nums))
function powerElementIndex1(arr){
    let newarray =[]
    for(let i=0 ; i<arr.length ; i++){
        newarray[i]=(arr[i] ** i)
    }
    return newarray
}
function powerElementIndex2(arr){
    let newarray =[]
    let i=0;
    while(i<arr.length){
        newarray[i]=(arr[i] ** i)
        i++
    }
    return (newarray)
}


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
var num= [5,2,2,1,8,7,0,9,10]
console.log('the new array is: ' + evenNumberEvenIndex1(nums))
console.log('the new array is: ' + evenNumberEvenIndex2(num))
function evenNumberEvenIndex1(arr){
    let newarray =[]
    for(let i=0 ; i<arr.length ; i++){
        if(i % 2 == 0 && arr[i] % 2 == 0){
            newarray.push(arr[i])
        }
    }
    return newarray
}
function evenNumberEvenIndex2(arr){
    let newarray =[]
    let i=0;
    while(i<arr.length){
        if(i % 2 == 0 && arr[i] % 2 == 0){
            newarray.push(arr[i])
        }
        i++
    }
    return (newarray)
}