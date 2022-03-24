
console.log('Here is : ', 'Object')


/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/

let myobj={fname:'Ruba',lname:'Almasri', age:26, dob:'8/3/96',favfood:['shawermah','spaghetti','pizza'] , favmovie:['frozen','antman','spiderman','superman','batman']}
console.log(myobj)




var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/

console.log(firstName(persons))
function firstName(obj){
  let arr=[]
  let str=[]
  for(let i=0; i<obj.length; i++){
    arr[i]=obj[i].name
  }
  for(let x=0;x<arr.length;x++){
    str[x]=arr[x].first
  }
  return str
}

/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
console.log(averageAge(persons))
function averageAge(a){
  let sum=0
  for(let i=0; i<a.length; i++){
    sum=sum+a[i].age
  }
  return ('Avg= ' + sum/a.length)
}

/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
console.log(olderPerson(persons))
function olderPerson(o){
  let a=o[0].age
  let index=0
  let str=''
  for(let i=0; i<o.length; i++){
    if(o[i].age>a){
      a=o[i].age
      index =i 
    }
  }
  str='The older person is: ' + o[index].name.first + ' ' + o[index].name.last
  return (str)
}

/*
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
console.log(longestName(persons))
// console.log(persons[0])
function longestName(x){
  let arr=[]
  let maxindex=0
  let len=0
  for(let i=0; i<x.length; i++){
    arr[i]=x[i].name
  }
//   console.log(arr)
  let maxleng=arr[0].first.length +  arr[0].last.length 

  for(let x=1;x<arr.length;x++){
    len=arr[x].first.length +  arr[x].last.length  ;
    if(len>maxleng){
      maxindex = x
      maxleng=len
    }
  }
  let str='Longest full name: ' + arr[maxindex].first + ' ' + arr[maxindex].last
  return str 
}

/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
console.log(longestName(persons))
// console.log(persons[0])
function longestName(x){
  let arr=[]
  let maxindex=0
  let len=0
  for(let i=0; i<x.length; i++){
    arr[i]=x[i].name
  }
//   console.log(arr)
  let maxleng=arr[0].first.length +  arr[0].last.length 

  for(let x=1;x<arr.length;x++){
    len=arr[x].first.length +  arr[x].last.length  ;
    if(len>maxleng){
      maxindex = x
      maxleng=len
    }
  }
  let str='Longest full name: ' + arr[maxindex].first + ' ' + arr[maxindex].last
  return str 
}

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
console.log(repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO"))
function repeatWord(str){
  let arr=str.split(' ')
  let obj1 =new Object()
  let count=0
  for(let i=0; i<arr.length; i++){
    arr[i]=arr[i].toLowerCase()
  }
  for(let i=0; i<arr.length; i++){
    count=0;
    for(let j=0; j<arr.length; j++){
      if(arr[i]===arr[j]){
        count++;
      }
    }
    let a=arr[i]
    obj1[a]=count
  }
  return obj1
}


/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/
console.log(repeatChar("mamababatetacedo"))
function repeatChar(s){
  let count=0;
  let obj2=new Object()
  let str=s.split('')
  let leng=str.length;
  for(let i=0; i<leng; i++){
    count=0;
    for(let j=0; j<leng; j++){
      if(str[i]===str[j]){
        count++
      }
    }
    let a=str[i]
    obj2[a]=count
  }
  return obj2
}

/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
console.log(selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd']))
function selectFromObject(o,a){
  let obj3=new Object()
  for(let i in o){
    for(let j=0; j<a.length;j++){
      if(i==a[j]){
        obj3[i]=o[i]
      }
    }
  }
  return obj3
}


