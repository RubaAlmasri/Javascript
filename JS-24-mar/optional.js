
console.log('Here is : ', 'Object')


/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
console.log(objectToArray({firstName:"Moh",age:24}))
function objectToArray(obj){
    let arr=[]
    let i=0
    for(let x in obj){
        arr.push(x)
        arr.push(obj[x])
    }
    return arr
}

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
console.log(arrayToObject(["firstName","Moh","age",24]))
function arrayToObject(arr){
    let obj=new Object()
    for(let i=0; i<arr.length; i+=2){
        obj[arr[i]]=arr[i+1]
    }
    return obj
}

/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
console.log(onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]}))
function onlyNumber(obj){
    let newobj=new Object()
    // console.log(typeof obj.age)
    for(let i in obj){
        if(typeof(obj[i])=='number'){
            newobj[i]=obj[i]
        }
    }
    return newobj
}

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
console.log(onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]}))
function onlyString(obj){
    let obj2=new Object()
    // console.log(typeof obj.firstName)
    for(let x in obj){
        if(typeof obj[x]=='string'){
            obj2[x]=obj[x]
        }
    }
    return obj2
}

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
console.log(onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]}))
function onlyArray(obj){
    let obj1=new Object()
    // console.log(typeof obj.movies)
    for(let x in obj){
        if(typeof obj[x]=='object'){
            obj1[x]=obj[x]
        }
    }
    return obj1
}

/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
console.log(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}))
function keysArray(obj){
    let arr=[]
    for(let i in obj){
        arr.push(i)
    }
    return arr
}

/*
16
Create a function called valuesArray
that accept an object
and return an array have the values inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ["Moh", 24, [1,5,"string"]]

*/
console.log(valuesArray({firstName:"Moh",age:24,movies:[1,5,"string"]}))
function valuesArray(obj){
    let arr =[]
    for(let x in obj){
        arr.push(obj[x])
    }
    return arr
}

/*
17
make this object => {a:1,b:3,c:4}
to be this object {a:4,c:66}
**hint: Search on MDN how to remove a key/value from an object
*/
let obj={a:1,b:3,c:4}
delete obj.b
obj.a=4
obj.c=66
console.log(obj)


/*
18
Create a function called objectLength
that accept an object
and return the number of keys inside this object

Ex: keysArray({a:1,b:2,c:3,d:4})
=> 4
*/
console.log(objectLength({a:1,b:2,c:3,d:4}))
function objectLength(obj){
    let count=0;
    for(let x in obj){
        count++
    }
    return count
}

/*
19
Create a function called evenValue
that accept an object
and return a new object that have only the key/values if the value is even

Ex: evenValue({a:1, b:2, c:3, d:4})
=> {b:2, d:4}
*/
console.log(evenValue({a:1, b:2, c:3, d:4}))
function evenValue(obj){
    for(let x in obj){
        if(obj[x] % 2 != 0){
            delete obj[x]
        }
    }
    return obj
}

/*
20
Create a function called longestKey
that accept an object
and return the value inside the longest key

Ex: evenValue({car:1, school:2, monster:3, alexMercer:4})=> 4
*/
console.log(longestKey({car:1, school:2, monster:3, alexMercer:4}))
function longestKey(obj){
    let longest=Object.keys(obj)[0]
    // console.log(longest)
    for(let x in obj){
        if(x.length > longest.length){
            longest = x
        }
    }
    return (obj[longest])
}
