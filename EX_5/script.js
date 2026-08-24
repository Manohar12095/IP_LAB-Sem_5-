// Save student details and open quiz page
function startQuiz(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const rollNumber = document.getElementById("rollnumber").value;

    localStorage.setItem("studentName", name);
    localStorage.setItem("rollNumber", rollNumber);

    window.location.href = "questions.html";
}


// Display student details on quiz page
window.onload = function () {
    const name = localStorage.getItem("studentName");
    const rollNumber = localStorage.getItem("rollNumber");

    const studentName = document.getElementById("studentName");
    const rollNumberElement = document.getElementById("rollNumber");

    if (studentName && rollNumberElement) {
        studentName.textContent = name;
        rollNumberElement.textContent = rollNumber;
    }
};


// Check answers
function submitQuiz() {

    const answers = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "b",
        q5: "c",
        q6: "d",
        q7: "c",
        q8: "b",
        q9: "c",
        q10: "c"
    };

    // One-word answer questions (checked separately, case-insensitive)
    const oneWordAnswers = {
        q11: "cpp",
        q12: "iostream"
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length + Object.keys(oneWordAnswers).length;

    for (let question in answers) {

        const selected = document.querySelector(
            `input[name="${question}"]:checked`
        );

        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    for (let question in oneWordAnswers) {

        const input = document.querySelector(`input[name="${question}"]`);
        const userAnswer = input ? input.value.trim().toLowerCase() : "";

        if (userAnswer === oneWordAnswers[question]) {
            score++;
        }
    }

    const name = localStorage.getItem("studentName");

    document.getElementById("result").innerHTML =
        `${name}, your score is ${score} / ${totalQuestions}`;
}