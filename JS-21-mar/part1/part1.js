

/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/

  let num1=parseInt(prompt('Enter the first number: '))
  let num2=parseInt(prompt('Enter the second number: '))
  if(num1 >= num2){
      alert('the larger number is:' + num1)
  }
  else{
    alert('the larger number is:' + num2)
  }


 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/

let num_1=prompt('Enter the first number: ')
let num_2=prompt('Enter the second number: ')
let num_3=prompt('Enter the third number: ')
let prod=num_1*num_2*num_3
if(prod < 0){
    alert('The sign is: - ' )
}
else{
    alert('The sign is: + ' )
}

 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/

var x=parseInt(prompt('Enter the first number: '))
var y=parseInt(prompt('Enter the second number: '))
var z=parseInt(prompt('Enter the third number: '))
if(x > y && x > z){
    if (y > z){
            alert(x + ", " + y + ", " + z)
        }
        else{
            alert(x + ", " + z + ", " + y)
        }
}
else if(y > x && y > z){
    if (x > z){
            alert(y + ", " + x + ", " + z)
        }
        else{
            alert(y + ", " + z + ", " + x)
        }
}
else if(z > x && z > y){
    if (x > y){
            alert(z + ", " + x + ", " + y)
        }
        else{
            alert(z + ", " + y + ", " + x)
        }
}

 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
  
var a=parseInt(prompt('first number: '))
var b=parseInt(prompt('second number: '))
var c=parseInt(prompt('third number: '))
var d=parseInt(prompt('fourth number: '))
var e=parseInt(prompt('fifth number: '))
if(a>b && a>c && a>d && a>e){
    alert('the largest : ' + a)
}
else if(b>a && b>c && b>d && b>e){
    alert('the largest : ' + b)
}
else if(c>a && c>b && c>d && c>e){
    alert('the largest : ' + c)
}
else if(d>a && d>b && d>c && d>e){
    alert('the largest : ' + d)
}
else{
    alert('the largest : ' + e)
}

 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
var x=parseInt(prompt('First number: '))
var y=parseInt(prompt('Second number: '))
if(x > y){
    alert('Hello World')
}
else{
    alert('Goodbye')
}

 /******* End Your Code ********* */
