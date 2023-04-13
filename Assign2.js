// 1: Fibonacci Series

var num1 = 0;
var num2 = 1;
var num;

for (i = 2; i < 10; i++){
    num = num1 + num2
    alert(num)
    num1 = num2;
    num2 = num;
}

// 2: Factorial 

var num = prompt("Enter a number: ");
var fact = 1;
for (i = 1; i <= num; i++){
    fact = fact * i;
}
alert(`The factorial of ${num} is ${fact}`)


// 3: Removes Occurrences


var sentence = "orange is a fruit and it is also a color.";
alert(sentence);
alert("After Replacing");
sentence=sentence.replaceAll('o', '@');
alert(sentence);

// 4: Reverse a String 
 

var str = "Nothing";
alert(str);

var strArray = str.split("");
alert(strArray);

var reversedArray = strArray.reverse();
alert(reversedArray);

var reversedStr = reversedArray.join("");
alert(reversedStr);

// 5: Getter and Setter Method:
 
var stu = {
    Name: "Ali",
    Rollno: "01",
    get info() {
        return this.Name +" " +this.Rollno;
        
    },
    set info(name) {
        this.Name = (name);
    },
}
alert(stu.info);
stu.name = prompt("Enter a name");
alert(stu.name);


// 6: Repeating Char


let str = "Hii";
let firstRepChar;

for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j < str.length; j++) {
    if (str[i] === str[j]) {
      firstRepChar = str[i];
      break;
    }
  }
  if (firstRepChar) {
    break;
  }
}
alert(firstRepChar);

// Integer or not

var int = prompt("Enter something")
alert(int);
if (int % 1 == 0) {
    alert(`${int} is an integer`)
}
else {
        alert(`${int} is not an integer`)
}
 
//Function Allow to call a function

function car(model) {
    return function (color) {
        alert(`Model is ${model} and Color is ${color}`)
    }
}
var carprop = car(prompt("Enter Model of Car"));
carprop(prompt("Enter Color of car"));

