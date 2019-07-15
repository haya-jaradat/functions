// all the exercises should use recursion:

/*
1
Create a function called sum
that takes a single parameter n,
and return the sum of all integers up to n starting from 0
Ex: sum(2); => 2 + 1 + 0 => 3
Ex: sum(5); => 5 + 4 + 3 + 2 + 1 + 0 => 15
*/
 function sum(n){
 	if (n==0){
 		return 0 ;
 	} 
 	else {
 		return n + sum(n-1);
 	}
 }
console.log(sum(5));
/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 6
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
  function factorial(n){
 	if (n==0){
 		return 1 ;
 	} 
 	else {
 		return n * factorial(n-1);
 	}
 }
console.log(factorial(4));

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the stop condition should be [somthing=== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
function repeatStr(str,num){
    if (num === 0) {
    	return str;
    }
    
    else if (num > 0) 
    {
        return str + repeatStr(str,num-1);
    }
}
  console.log(repeatStr("to " ,4));
/*
4
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number
Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1
fibon(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
n:        0 1 2 3 4 5  6  7
*/
function fibon(num){
	if (num <=1){
		return 1;
	}
		return fibon(num-1) +  
           fibon(num-2);
	}


console.log(fibon(7));

/*
5
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
function sum2(num1,num2){
	if (num1 == num2){
		return num2;
	}
	else
	 {

      return num1 + sum2(num1+1, num2);
	}
	}
	
console.log(sum2(6,9));


/*
6
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the stop condition should be [somthing=== 0]
** Important: You should dint have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
 function repeatStr2(s1,s2){
 
  if (s2.length==0){
  	return s1;
  }
    else 
    {
       return  s1 + repeatStr2(s1,s2.charAt(s2.length - 1));
    }
   }

  console.log(repeatStr2("to " ,"fff"));


 

/*
7
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
function multiOf(x,y,z){
	if (z===0){
		return x;
	}
	else{
	return y*multiOf(x,y,z - 1);
}
}
console.log(multiOf(6,2,3));
/*
8
Create a function called muti2
that take two parameter
and will return the multiplication from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
function muti2(x,y){
	if (x===y){
		return y;
	}
	else{
		return x*muti2((x+1),y);
	}
}
console.log(muti2(3,6));

/*
9
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should dint have extra space at the end or comma
** Important: the stop condition should [num1===num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
function numberBetweenUs(x,y){
	if(x === y-1){
		return "";
	}
	else {
		return (x+1) +"," + numberBetweenUs(x+1 , y-1);
	}
}
console.log(numberBetweenUs(2,8));

/*
10
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 need to ahve "done"
between each number a comma and space
** you need to use recursion
** Important: You should dint have extra space at the end or comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
function countDown(x){
	if (x =0){
		return "done";
	}
     else {
     	return x + countDown(x-1);
     }      
}
console.log(countDown(7));
/*
11
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
function multiplication2(x,y){
	 if (x== 0){
	 	return 0;
	 }
	 else {
	 	return x + multiplication2(x,y-1);
	 }
}
console.log(multiplication2(5,4));
/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
*/
function mod2(x,y){
	if(x==y ){
		return x-y;
	}
	else {
		return mod2(x-y , y);
	}
}
console.log(mod2(5,4));

/*
12
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/
function mirror(x) {
  if (x == "") {
    return "";
  }

  return mirror(x.substring(1))+x.charAt(0);;
}
console.log(mirror("school"));


/*
13
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/

function mirrorCaseAlso(x){
  if (x==""){
  	return "";
  }
  return mirrorCaseAlso(x.substring(1).toLowerCase()+x.charAt(0));
}
console.log(mirrorCaseAlso("sChOol"));

/*
14
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
function repeatChar(x,y){
   if (x.lenght===0){
   	return 0;
   }
   else if (x[0].toUpperCase()=== y.toUpperCase()){
   	return repeatChar(x.slice(1,x.length), y);
   }

}
console.log(repeatChar("schOol","o"));
/*
15
Write a function called repeatChar2
that takes two parameters
and return the times that this char
with case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/

function repeatChar2(x,y){
   if (x.lenght===0){
   	return 0;
   }
   else if (x[0].toUpperCase()=== y.toUpperCase()){
   	return repeatChar2(x.slice(1,x.length), y);
   }

}


console.log(repeatChar2("schOol","o"));