function quiz() {
    let score = 0;

    let question1 = prompt(
        "Q1: What is 5 + 5?\n1. 10\n2. 15\n3. 20"
    );

    if (question1 == "1") {
        score++;
    }

    let question2 = prompt(
        "Q2: Which language is used for web development?\n1. Python\n2. JavaScript\n3. C++"
    );

    if (question2 == "2") {
        score++;
    }

    let question3 = prompt(
        "Q3: Which keyword is used to declare a variable?\n1. let\n2. print\n3. input"
    );

    if (question3 == "1") {
        score++;
    }

    document.getElementById("result").innerText =
        "Quiz is completed! Your score is: " + score + "/3";
}