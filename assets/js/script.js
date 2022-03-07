var myQuestions = [
    {
        question: "__ is used for styling a webpage.",
        a: "JS",
        b: "CSS",
        c: "HTML",
        d: "C++",
        answer: "CSS"
    },
    {
        question: "A __ variable must be inclosed in quotes.",
        a: "string",
        b: "var",
        c: "boolean",
        d: "int",
        answer: "string"
    },
    {
        question: "___ can be used to add rows and columns to a webpage.",
        a: "jQuery",
        b: "Moment JS",
        c: "Popper",
        d: "Bootstrap",
        answer: "Bootstrap"
    },
    {
        question: "What element does JavaScript go in?",
        a: "javascript",
        b: "js",
        c: "script",
        d: "scripting",
        answer: "script"
    },
    {
        question: "Where is the correct place to insert the script link?",
        a: "script section",
        b: "head section",
        c: "footer section",
        d: "header section",
        answer: "script section"
    },
    {
        question: "Where is the correct place to insert the css link?",
        a: "header section",
        b: "footer section",
        c: "head section",
        d: "body section",
        answer: "head section"
    },
    {
        question: "Which of the folling will give an alert?",
        a: "alert('Hello World')",
        b: "alertBox(Hello World)",
        c: "alert(Hello World)",
        d: "alertbox('Hello World')",
        answer: "alert('Hello World')"
    }

]
var quizLength = myQuestions.length + 1;
var count = 0;
var score = 0;
var timeLeft = 60;


$("#finish").hide();
$("#result").hide();
$("#main").hide();
$(".time").hide();


var createQuestion = function(myQuestions, i) {
    $("#question").text(myQuestions[i].question)
    $("#option1").text(myQuestions[i].a)
    $("#option2").text(myQuestions[i].b)
    $("#option3").text(myQuestions[i].c)
    $("#option4").text(myQuestions[i].d)
}

$("#startBtn").on("click", function() {
    $(".startPage").hide();
    $("#main").show();
    $(".time").show();
    countdown();
    createQuestion(myQuestions, count);
})

$("#options").on("click", ".btn", function() {

    var userAnser = $(this).html();
    var answer = myQuestions[count].answer;

    checkAnswer(userAnser, answer);
    
    if (count < quizLength) {
        count++;
        createQuestion(myQuestions, count);
    }
    else {
        getResults();
    }
})

var getResults = function() {
    $("#main").hide();
    $("#result").show();
    $("#score").text(score + "/" + 6);
}

var checkAnswer = function (ans1, ans2) {
    if (ans1 === ans2) {
        score++;
        console.log(score);
    }
    else {
        console.log("You suck.")
        timeLeft = timeLeft - 10;
    }
}

var countdown = function () {
    var timeInterval = setInterval (function() {
        if (timeLeft >= 1 && count < 6) {
            $(".time").text(timeLeft);
            timeLeft--;
        }
        else {
            clearInterval(timeInterval);
            $(".time").text("");
            $("main").hide();
            getResults();
            $("#result").show();
        }
    }, 1000)
}


$("#btnScores").on("click", function() {
    var name = $(".scoreInput").val();
    localStorage.setItem("name", name);
    localStorage.setItem("score", score);
})
var savedNames = localStorage.getItem("name");
var savedScores = localStorage.getItem("score");
$("#scoresList").append($("<li>").text(savedNames + " " + savedScores));

