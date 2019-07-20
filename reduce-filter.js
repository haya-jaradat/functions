console.log('Here is : ', 'Reduce & Filter') \

//Using Reduce 1 -5
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



/*
1
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array
Ex: avgAge(persons) => 41.2
*/

var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];



function avgAge(arr){
  var n= arr.reduce((x,y)=>{return x+y.age;},0);
   
return(n/arr.length);
}
console.log(avgAge(persons));
/*
2
Using the varabile persons
Create a function called longestName
that accept an array
and return the longerst full name
Ex: longestName(persons) => 'Soso Al-Amora'
*/

var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];


function longestName(arr){
  var long= arr.reduce(function(x,y){
      if(x.length<(y.name.first+y.name.last).length){
        return y.name.first+' '+y.name.last;}
        return x;
  },'');

  return long;
}

console.log(longestName(persons));

/*
3
Create a function called maxNumber
that accept an array
and return max number
Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(arr){
 var max = arr.reduce((x,y)=> {
 	if (x > y){
 		return x;
 	}
 	return y;
 })
  return max;
}
console.log(maxNumber([1,2,4,9]));
/*
4
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string
Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(str,char){
	var count=0;
	var str1= str.split("");
    var rep = str1.reduce((x,y)=> {
         if (y == char){
         return	count = count + 1
         }});
         return count;
         }
    


repeatChar("hello world","l");
/*
5
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them
Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/

function usAndNumberBeetweenUs(n1,n2){
	if(n1<n2){
	var arr=[];
	arr.push(n1);
	arr.push(n2);

	arr.reduce(function (x,y){
	 for(i=n1;i<n2;i++){
		if(x<n2){
			arr.push(++x);

		}
		}	

	})
	arr.shift();
	arr.shift();
	arr.unshift(n1);
}
if(n1>n2){
	var arr=[];
	arr.push(n1);
	arr.push(n2);

	arr.reduce(function (x,y){
	 for(i=n1;i>n2;i--){
		if(x>n2){
			arr.push(--x);

		}
		}	

	})
	arr.shift();
	arr.shift();
	arr.unshift(n1);
}
return arr;
}
console.log(usAndNumberBeetweenUs(2,5));




//Filter 6 - 11
/*
6
Create a function called evenOnly
that accept an array
and return an array of even number only
Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/



function evenOnly(arr){
	return arr.filter(a => a%2==0);
}
evenOnly([1,8,6,4]);
// 7
// Create a function called multiFour
// that accept an array
// and return an array of these number that is a mutiply by 4
// Ex: multiFour([1,8,6,4]) => [8,4]
// */
 function multiFour(arr){
 		return arr.filter(a => a%4==0);
 }
multiFour([1,8,6,4]);
// /*
// 8
// **this question not that easy mybe you will need to use two function inside each other
// Create a function called containChar
// that accept an array of string
// and return an array of these string that contain this char
// Ex: containChar(["hello","world"],w) => ["world"]
// Ex: containChar(["hello","world"],l) => ["hello","world"]
// */
function containChar(str , char){
	 return str.filter(a => a.indexOf(char) !== -1);
}
 containChar(["hello","world"],"w");
// /*
// 9
// Create a function called evenIndexOddLength
// that accept an array of strings
// and return an array that have the string with odd length in even index
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: evenIndexOddLength(strings) => ["madrasa"]
// */
function evenIndexOddLength(arr){
    return arr.filter((a,i) => a.length %2 !==0 && i % 2 == 0);
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
 evenIndexOddLength(strings);
// /*
// 10
// Using the varabile persons
// Create a function called olderThan
// that accept an array and number
// and return the person that have age older than this number
// Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
// */
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];


function olderThan(arr , num){
	return arr.filter(a =>a.age > num);
}

olderThan(persons,56);

/*
12
Using Filter
Create a function called longerThan
that accept an array of strings
and return the longer string than the number
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: longerThan(strings,4) => ["mercer","madrasa","rashed2"]
*/

function longerThan(arr,num){

 	return  arr.filter(a=>a.length>num);

    	
 }
console.log(longerThan(strings,4));
// /*
// 11
// Create a function called shorterThan
// that accept an array of strings and a number
// and return the shorter string than the number
// var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
// Ex: shorterThan(strings,5) => ["alex","emad","hala"]
// */

function shorterThan(arr , num){
	return arr.filter(a => a.length < num);
}
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
shorterThan(strings,5);
// // if you finish the exercises review the material of the week and help your classmate
/*
13
Using Filter
Create a function called onlyOneWord
that accept an array of strings
and return only those strings with a single word (no spaces)
var strings= [ 'return', 'phrases', 'with one word' ];
Ex: onlyOneWord(strings) => [ 'return', 'phrases' ]
*/

function onlyOneWord(arr){

 	return  arr.filter(a=>!(a.includes(" ")));

    	
 }
var strings1= [ 'return', 'phrases', 'with one word', ];
console.log(onlyOneWord(strings1));

/*
14
Using Filter
Create a function called positiveRowsOnly
that accept an array of array of numbers(matrix)
and return only the rows in the matrix that have all positive integers
var numbers= [[ 1, 10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];
Ex: positiveRowsOnly(numbers) => [ 3, 30,  300 ]
*/
function positiveRowsOnly(arr){

 	return  arr.filter(a=>{
 		for(i=0;i<a.length;i++){
 		
 		  if(a[i]>0){
 			continue;
 		  }
        return;
 	    };
 	return a;
    }
 	);

    	
}
var numbers= [[ 1, 10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];
console.log(positiveRowsOnly(numbers));

/*
15
Using Filter
Create a function called allSameVowels
that accept an array of strings
return only those words where all the vowels are the same
var strings= [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
Ex: allSameVowels(strings) =>  [ 'amalgam', 'zoom' ]
*/
function allSameVowels(arr){
 var vowels=["a","e","i","u","o"];
 var arr1 = [];
 var long = 0;
 
 return arr.filter(a=> {
 	
 	for(i=0;i<vowels.length;i++){
      
        if(a.indexOf(vowels[i])!=-1){
				 
		    arr1 .push(vowels[i]);
		}	
 	
 	 }
 	 
 	 long= arr1 .length;
     arr1  = [];
	 return long==1;
  })
}
 strings= [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
 console.log(allSameVowels(strings)); 
//Using Reduce 16 -

/*
16
Using Reduce
Create a function called objectify
that accept an array of pairs array
and turns an array of arrays into an object
var array= [[ 'Thundercats', '80s' ],[ 'The Powerpuff Girls', '90s' ],[ 'Sealab 2021', '00s' ]]
Ex: objectify(array) =>  { 'Thundercats': '80s', 'The Powerpuff Girls': '90s', 'Sealab 2021': '00s' };
*/
function objectify(arr){
var arr1={};
return arr.reduce((x,y)=> {
   arr1[y[0]]=y[1];
	 return arr1;
},[]);

}
var array= [[ 'Thundercats', '80s' ],[ 'The Powerpuff Girls', '90s' ],[ 'Sealab 2021', '00s' ]]
objectify(array);
	

/*
17
Using Reduce
Create a function called luckyNumbers
that accept an array of number
and turns an array of arrays into an object
var array= [ 30, 48, 11, 5, 32 ]
Ex: luckyNumbers(array) => 'Your lucky numbers are: 30, 48, 11, 5, and 32';
*/
function luckyNumbers(arr){
	var arr1={};
	var array1=[];
var a= arr[0]+", "+arr.reduce((x,y)=>{;
array1.push(y);
return array1;
},)
arr1["Your lucky numbers are"]=a;
return arr1;
}
 array= [ 30, 48, 11, 5, 32 ]
console.log( luckyNumbers(array)); 
// if you finish the exercises review the material of the week and help your classmate