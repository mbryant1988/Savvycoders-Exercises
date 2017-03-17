var a = 1;
var outputTarget = document.querySelector("#exercise-1");
var outputHtml = "<ul>";
while (a <= 10) {
  console.log(a);
  outputHtml += "<li>" + a + "</li>";
  a++;
}
outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

var b =2;
var outputTarget = document.querySelector("#exercise-2");
var outputHtml = "<ul>";
while (b < 20) {
  console.log(b);
    outputHtml += "<li>" + b + "</li>"
  b+=2;
}
outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

var c = 100;
var d = 1;
var sum = 0;
var outputTarget = document.querySelector("#exercise-3");
var outputHtml = "<ul>";
while(d < c) {
  sum += d;
  console.log(sum);
    outputHtml += "<li>" + sum + "</li>"
  d++;
}
outputHtml += "</ul>";
outputTarget.innerHTML = outputHtml;

var e = 15;
var outputTarget = document.querySelector("#exercise-5");
var outputHtml = "<ul>";

while (e > 0) {
    console.log(e);
    if ( e % 2 === 0) {
      outputHtml += "<li>even</li>";
    } else {
      outputHtml += "<li>odd</li>";
    }
    e--;
}
outputHtml += "</ul>"
outputTarget.innerHTML = outputHtml;

var f =1;
var outputTarget = document.querySelector("#exercise-6")
var outputHtml = "<ul>";

while (f <= 100) {
    if ( f % 3 === 0 && f % 5 === 0){
    console.log("Fizzbuzz");
    outputHtml +="<li>Fizzbuzz</li>"
  } else if ( f % 3 === 0) {
    console.log("Fizz");
    outputHtml+="<li>Fizz</li>"
  } else if ( f % 5 === 0){
    console.log("Buzz");
    outputHtml+="<li>Buzz</li>"
  }
    f++;
}
outputHtml += "</ul>"
outputTarget.innerHTML = outputHtml;
