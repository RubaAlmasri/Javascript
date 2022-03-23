console.log('Here is : While')

/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
console.log('sub: '+ subtract(9))
console.log('sub: '+ subtract(2))
console.log('sub: '+ subtract(-5))
function subtract(n){
    let sub=n ;
    if(n>=0){
        let i = n-1 ;
        while(i>=0){
            sub-=i
            i--
        }
    }
    else{
        let i = n+1 ;
        while(i<0){
            sub-=i
            i++
        }
    }
    return sub
}

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
console.log('factorial: '+ factorial(2))
console.log('factorial: '+ factorial(0))
console.log('factorial: '+ factorial(1))
console.log('factorial: '+ factorial(-9))
function factorial(n){
    let i=1;
    let product=1;
    if(n>=0){
        while(i<=n){
            product*=i
            i++
        }
        return product
    }
    else{
        return ('wrong value!!!')
    }
    
}

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
console.log(repeatStr("to",2))
console.log(repeatStr("to",4))
function repeatStr(s,n){
    let i = 0;
    let str=''
    while(i<n){
        str=str+s
        if(i!=n-1){
            str=str+' '
        }
        i++
    }
    return str
}

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
console.log('sum: '+ sum2(4,5))
console.log('sum: '+ sum2(6,3))
console.log('sum: '+ sum2(9,9))
console.log('sum: '+ sum2(-9,9))
console.log('sum: '+ sum2(9,-9))
function sum2(x,y){
    let i = x ;
    let sum=0;
    if(x<=y){
        while(i<=y){
            sum+=i
            i++
        }
    }
    else{
        while(i>=y){
            sum+=i
            i--
        }
    }
    return sum
}

/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
console.log(repeatStr2("ro","cc"))
console.log(repeatStr2("ro","ffff"))
function repeatStr2(s1,s2){
    let leng=s2.length
    let i=0
    let str=''
    while(i<leng){
        str=str+s1
        if(i!=leng-1){
            str=str+' '
        }
        i++
    }
    return str
}
/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
console.log('result= '+multiOf(4,10,3))
console.log('result= '+multiOf(6,-3,3))
console.log('result= '+multiOf(6,2,-3))
function multiOf(x,y,z){
    let result=x;
    let i = 0 ;
    let pro=1;
    if(z>0){
        while(i<z){
            pro*=y
            i++
        }
        return (result*pro)
    }
    else{
        while(i>z){
            pro*=y
            i--
        }
        return (result/pro)
    }
    
}
/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
console.log('multi= '+muti2(4, 5))
console.log('multi= '+muti2(6,3))
console.log('multi= '+muti2(-1,-3))
console.log('multi= '+muti2(-6,-1))
function muti2(n,m){
    let i = n;
    let multi=1;
    if(n<=m){
        while(i<=m){
            multi*=i
            i++
        }
        return multi
    }
    else{
        while(i>=m){
            multi*=i
            i--
        }
        return multi
    }
}
/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
console.log(numberBetweenUs(2,8))
console.log(numberBetweenUs(-3,3))
console.log(numberBetweenUs(3,-3))
console.log(numberBetweenUs(5,1))
function numberBetweenUs(a,b){
    let str=''
    if(a<b){
        let i = a+1;
        while(i<b){
            str=str+i
            if(i<b-1){
                str=str+', '
            }
            i++
        }
        return str
    }
    else{
        let i = a-1;
        while(i>b){
            str=str+i
            if(i>b+1){
                str=str+', '
            }
            i--
        }
        return str
    }
}

/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
console.log(countDown(5))
console.log(countDown(7))
console.log(countDown(-7))
console.log(countDown(0))
function countDown(num){
    let i = num ;
    let str='';
    if(num>0){
        while(i>0){
            str= str + num +', '
            num--
            i--
        }
    }
    else{
        while(i<0){
            str=str + num+', '
            num++
            i++
        }
    }
    return str+'done'
}


/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
console.log('multi: '+ multiplication2(5,4))
console.log('multi: '+ multiplication2(-5,-5))
console.log('multi: '+ multiplication2(5,-20))
function multiplication2(x,y){
    let i = 0;
    let sum=0;
    if(y>0){
        while(i<y){
            sum+=x
            i++
        }
    }
    else{
        while(i>y){
            sum+=x
            i--
        }
        sum*=-1
    }
    return sum
}
/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/
console.log(mod2(5,4))
console.log(mod2(2,8))
console.log(mod2(8,4))
console.log(mod2(-2,8))
function mod2(n1,n2){ 
    let div=(n1/n2);
    if((div>0 && div<1) || (div>-1 && div<0)){
      return n1
    }
    else if(Number.isInteger(div)){
      return 0
    }
    else if(n1>n2||div>1||div<-1){
      let i = n1
      while(i>n2){
        i=i-n2
      }
      return i
    }
}

/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/
console.log(repeatChar("schOol","o"))
console.log(repeatChar("school","L"))
console.log(repeatChar("School","s"))
console.log(repeatChar("School","r"))
function repeatChar(s1,s2){

    let i=0
    let count =0 
    while(i<s1.length){
        if(s1[i]===s2 || s1[i]=== s2.toUpperCase() || s1[i]=== s2.toLowerCase()){
            count+=1;
        }
        i++
    }
    return count
}