console.log("Phishing Awareness Training Loaded Successfully");

function checkWebsiteAnswer() {

    const selected = document.querySelector('input[name="paypal"]:checked');
    const result = document.getElementById("websiteResult");

    if (!selected) {
        result.style.color = "red";
        result.innerHTML = "⚠️ Please select an answer first.";
        return;
    }

    if (selected.value === "A") {
        result.style.color = "green";
        result.innerHTML =
        "✅ Correct! https://paypal.com is the legitimate website.<br><br>Always examine the URL carefully. Attackers often replace letters with similar-looking characters or add extra words to trick users.";
    } else {
        result.style.color = "red";
        result.innerHTML =
        "❌ Incorrect. The correct answer is <strong>https://paypal.com</strong>.<br><br>Fake websites often use extra words such as 'secure', 'login', or 'verify', or replace letters with similar-looking characters.";
    }

}

function checkOTP(){

    const selected = document.querySelector('input[name="otp"]:checked');
    const result = document.getElementById("otpResult");

    if(!selected){

        result.style.color = "red";
        result.innerHTML = "⚠️ Please select an answer first.";
        return;

    }

    if(selected.value === "B"){

        result.style.color = "green";
        result.innerHTML =
        "✅ Correct! Never share your OTP with anyone. If you're unsure, end the call and contact your bank using its official customer service number.";

    }

    else{

        result.style.color = "red";
        result.innerHTML =
        "❌ Incorrect. Banks and other legitimate organizations will never ask for your OTP. The safest action is to hang up and contact the bank directly using an official number.";

    }

}

function checkSafety(){

    const selected = document.querySelector('input[name="safe"]:checked');
    const result = document.getElementById("safetyResult");

    if(!selected){

        result.style.color = "red";
        result.innerHTML = "⚠️ Please select an answer first.";
        return;

    }

    if(selected.value === "C"){

        result.style.color = "green";
        result.innerHTML =
        "✅ Correct! Two-Factor Authentication adds an extra layer of security, making it much harder for attackers to access your accounts even if they know your password.";

    }else{

        result.style.color = "red";
        result.innerHTML =
        "❌ Incorrect. The safest choice is enabling Two-Factor Authentication (2FA). It provides an additional security layer to help protect your accounts.";

    }

}

function gradeQuiz(){

    const answers = {
        q1:"A",
        q2:"B",
        q3:"B",
        q4:"B",
        q5:"A",
        q6:"C",
        q7:"B",
        q8:"B",
        q9:"A",
        q10:"C"
    };

    const studentName = document.getElementById("studentName").value.trim();

    if(studentName === ""){
        alert("Please enter your name before taking the quiz.");
        return;
    }

    for(let question in answers){

        const selected = document.querySelector(`input[name="${question}"]:checked`);

        if(!selected){
            alert("Please answer all questions before submitting the quiz.");
            return;
        }

    }

    let score = 0;

    for(let question in answers){

        const selected = document.querySelector(`input[name="${question}"]:checked`);

        if(selected.value === answers[question]){
            score++;
        }

    }

    let percentage = score * 10;

    // Save data for certificate
    localStorage.setItem("studentName", studentName);
    localStorage.setItem("quizScore", percentage);

    const result = document.getElementById("quizResult");

    result.style.display = "block";

    if(percentage >= 70){

        result.innerHTML = `
            <h2>🎉 Congratulations!</h2>

            <h3>Score: ${score}/10</h3>

            <h3>Percentage: ${percentage}%</h3>

            <p style="color:green;font-weight:bold;">
                Status: PASS ✅
            </p>

            <p>
                Excellent work! You have successfully completed the assessment.
            </p>

            <a class="btn" href="certificate.html">
                View Certificate
            </a>
        `;

    }else{

        result.innerHTML = `
            <h2>❌ Assessment Not Passed</h2>

            <h3>Score: ${score}/10</h3>

            <h3>Percentage: ${percentage}%</h3>

            <p style="color:red;font-weight:bold;">
                Status: FAIL
            </p>

            <p>
                A minimum score of 70% is required.<br><br>
                Review the lessons and try again.
            </p>

            <button class="btn" onclick="window.location.href='phishing.html'">
                Review Lessons
            </button>

            <button class="btn" style="margin-left:10px;" onclick="location.reload()">
                Retake Quiz
            </button>
        `;

    }

}

if(window.location.pathname.includes("certificate.html")){

    const name = localStorage.getItem("studentName");

    const score = localStorage.getItem("quizScore");

    const today = new Date();

    document.getElementById("certificateName").textContent =
        name || "Learner";

    document.getElementById("certificateScore").textContent =
        "Final Score: " + score + "%";

    document.getElementById("certificateDate").textContent =
        today.toDateString();

}