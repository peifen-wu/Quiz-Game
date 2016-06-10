
console.log("external file");
$(document).ready(function() {
    console.log("Dom loaded...")


var score = 0;
var score2 = 0; 

var $score = $('.score')
var $score2 = $('.score2')

var $qsnDisplay = $('.qsnDisplay')
var $qsnOption = $('.qsnOption')

var ans1
var ans2
var ans3
var ans4
var ans5
var ans6
var ans7
var ans8
var ans9
var ans10 




alert("Player 1 Start Now"); 


$qsnDisplay.text("Who was Singapore first Prime Minister?");
$qsnOption.text("1) Lee Hsien Loong 2) Goh Chok Tong 3) Lin Jun Jie 4) Lee Kuan Yew");
ans1=prompt("Player 1 Key in your Ans:");
if ( ans1 === "4"){
    score = score +1;
    alert("You are right");
}else{
    alert("Wrong! Try next Question.");
}

$score.text(score);
$score2.text(score2);

$qsnDisplay.text("What was Singapore originally know as?");
$qsnOption.text("1) Palembang  2) Singapura  3) Temasek 4) Johor Lama");
ans2 = prompt("Player 1 Key in your Ans:");

if ( ans2 === "4"){
    score = score +1;
     alert("You are right");
}else{
     alert("Wrong! Try next Question.");
}

$score.text(score);
$score2.text(score2);

$qsnDisplay.text("Which political party has dominated and won every election since self-government in 1959?");
$qsnOption.text("1) The Worker Party of Singapore (WP) 2) The People action Party (PAP) 3) Singapore Democratic Party (SDP) 4) Singapore Democratic Alliance (SDA)");
ans3 = prompt("Player 1 Key in your Ans:");

if ( ans3 === "2"){
    score = score +1;
    alert("You are right");
}else{
     alert("Wrong! Try next Question.");
}

$score.text(score);
$score2.text(score2);

$qsnDisplay.text("When did Singapore become independent?");
$qsnOption.text("1) 9 March 1954  2) 3 April 1984  3) 9 August 1965 4) 16 November 1975");
ans4 = prompt("Player 1 Key in your Ans:");

if ( ans4 === "3"){
    score = score +1;
     alert("You are right");
}else{
     alert("Wrong! Try next Question.");
}

$score.text(score);
$score2.text(score2);

$qsnDisplay.text("What does Singapore mean?");
$qsnOption.text("1) Garden City  2) Lion City  3) Freetown 4) 4 Star");
ans5 = prompt("Player 1 Key in your Ans:");

if ( ans5 === "2"){
    score = score +1;
     alert("You are right");
}else{
     alert("Wrong!");
}

$score.text(score);
$score2.text(score2);

//console.log("Player 1 Score = " + score);


alert("Is Player 2 turn!");


$qsnDisplay.text("Which of the following is not an official language of Singapore?");
$qsnOption.text("1) Chinese  2) English  3) Urdu 4) Tamil");
ans6 = prompt("Player 2 Key in your Ans:");

if ( ans6 === "3"){
    score2 = score2 +1;
     alert("You are right");
}else{
     alert("Wrong! Try next Question.");
}

$score.text(score);
$score2.text(score2);

$qsnDisplay.text("Which country is to the north of Singapore?");
$qsnOption.text("1) Malaysia  2) Sentosa  3) Sri Lanka 4) Pulau Ubin");
ans7 = prompt("Player 2 Key in your Ans:");

if ( ans7 === "1"){
    score2 = score2 +1;
     alert("You are right");
}else{
    alert("Wrong! Try next Question.");
}

$score.text(score);
$score2.text(score2);

$qsnDisplay.text("Which is the currency of Singapore? ");
$qsnOption.text("1) Baht  2) Pound  3) Dollar 4) Lats");
ans8 = prompt("Player 2 Key in your Ans:");

if ( ans8 === "3"){
   score2 = score2 +1;
     alert("You are right");
}else{
     alert("Wrong! Try next Question.");
}

$score.text(score);
$score2.text(score2);

$qsnDisplay.text("When did Thomas Stamford Raffles land on Singapore?");
$qsnOption.text("1) 29 January 1819  2) 10 May 1800  3) 4 July 1865 4) 18 October 1905");
ans9 = prompt("Player 2 Key in your Ans:");

if ( ans9 === "1"){
    score2 = score2 +1;
     alert("You are right");
}else{
     alert("Wrong! Try next Question.");
}

$score.text(score);
$score2.text(score2);

$qsnDisplay.text("What is the symbolism of crescent on Singapore’s flag?");
$qsnOption.text("1) Islam  2) Growth of a young country  3) Hinduism 4) Judaism");
ans10 = prompt("Player 2 Key in your Ans:");

if ( ans10 === "2"){
    score2 = score2 +1;
     alert("You are right");
}else{
     alert("Wrong!");
}

$score.text(score);
$score2.text(score2);

//console.log("Player 2 Score = " + score2);

 if (score > score2){
alert("winner is player1");
 }
 else if(score2 > score)
 {
alert("winner is player2");
 }
 else alert("Is a Draw");


});

function resetPage(){
    window.location.reload();
} 



// if (prompt("What was Singapore originally know as? 1) Palembang  2) Singapura  3) Temasek 4) Johor Lama ") == "4" ){

// score = score + 1;
// }


// if (prompt("Who was Singapore first Prime Minister? 1) Lee Hsien Loong 2) Goh Chok Tong 3) Lin Jun Jie 4) Lee Kuan Yew' ") == "1" ){

// score = score + 1;
// }

// function showAnswer(){
//     if (score == 2) {
//         console.log(Win);
//     } else{
//             console.log(lose);
//     }

// }

/*document.getElementById("result").innerHTML = "Thinking...";

function showAnswer() {
    if (score == 2){
        alert("you are first");
        document.getElementById("result").innerHTML = score;
}
*/

