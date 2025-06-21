const wands = [
    { name: "Ash Wand", image: "wand1.png", house: "Hufflepuff", cursor: "wand1-cursor.png" },
    { name: "Holly Wand", image: "wand2.png", house: "Gryffindor", cursor: "wand2-cursor.png" },
    { name: "Willow Wand", image: "wand3.png", house: "Ravenclaw", cursor: "wand3-cursor.png" },
    { name: "Yew Wand", image: "wand4.png", house: "Slytherin", cursor: "wand4-cursor.png" }
];

const karenImages = [
    { src: "k1.jpeg", caption: "Thank you for letting me a part of the YPG, you got some welcoming aura." },
    { src: "k2.jpeg", caption: "I would say that your side eye is the most memorable thing about you. I can see the 'What if that was my last straw' look right there." },
    { src: "k3.jpeg", caption: "Those trips to the basement were always so fun and I really did look forward to them because they got me out of working on the line and we get to talk." },
    { src: "k4.jpeg", caption: "This was the most weirdest moment because I didn't expect my friend from school to meet my friend from work, it was like a crossover episode." },
    { src: "k5.jpeg", caption: "The time we all unintentially matched, that's how you know we all mentally linked now. Great minds think alike." },
    { src: "k6.jpeg", caption: "The time we went to Target after work for some reason, I don't remember much but this was the time you actually had time to hang with us. Now you never do smh." },
    { src: "k7.jpeg", caption: "That Six Flags trip was really fun and I remember this was where I heard about your cringe highschool boyfriends. I wouldn't be surprised if you still acted the same. It's okay I don't judge (thank much)." },
    { src: "k8.jpeg", caption: "For Your Last Birthday where we went to a fancy restuarant and that waiter was checking you out 👀. Girl meets Waiter troupe?? " },
    { src: "k9.jpeg", caption: "I was surprised you went to go watch anime when you say you don't like it but this was fun. Our trip to get tacos was fun too, I ordered a burger at a mexican place, that tells you how much of a boss I am. " }
];
const questions = [
    {
        question: "Which Taylor Swift album speaks to your soul?",
        answers: [
            { text: "Reputation", house: "Slytherin" },
            { text: "Folklore", house: "Ravenclaw" },
            { text: "Lover", house: "Hufflepuff" },
            { text: "Red", house: "Gryffindor" },
        ]
    },
    {
        question: "Your favorite Jane Austen character?",
        answers: [
            { text: "Elizabeth Bennet", house: "Gryffindor" },
            { text: "Fanny Price", house: "Hufflepuff" },
            { text: "Mr. Darcy", house: "Slytherin" },
            { text: "Anne Elliot", house: "Ravenclaw" }
        ]
    },
    {
        question: "Who do you relate to most?",
        answers: [
            { text: "Percy Jackson", house: "Gryffindor" },
            { text: "Beth March (Little Women)", house: "Hufflepuff" },
            { text: "Jo March", house: "Ravenclaw" },
            { text: "Taylor Swift", house: "Slytherin" }
        ]
    },
    {
        question: "QUICK! SOMEONE IS IN TROUBLE AND THEY NEED A PERSON WITH AN ENGLISH BACHELORS DEGREE. WHAT DO YOU DO?",
        answers: [
            { text: "Whip out my annotated copy of Pride and Prejudice and dazzle them with literary insight.", house: "Ravenclaw" },
            { text: "Gently write them a perfectly worded email offering emotional support and to be a part of YPG.", house: "Hufflepuff" },
            { text: "I subtly manipulate the situation using Shakespearean quotes until I emerge victorious.", house: "Slytherin" },
            { text: "I sprint toward the chaos yelling metaphors until someone listens.", house: "Gryffindor" }
        ]
    },
    {
        question: "Which word/phrase best describes you?",
        answers: [
            { text: "Swiftie", house: "Slytherin" },
            { text: "Just A Chill Girl", house: "Hufflepuff" },
            { text: "No Sabo", house: "Ravenclaw" },
            { text: "Cuy", house: "Gryffindor" }
        ]
    },
    {
        question: "An abuela offers you food. What do you do?",
        answers: [
            { text: "Pregunto si la abuela usó ‘culantro’ o ‘cilantro’ y termino escuchando la historia del ceviche de camarón por 45 minutos.", house: "Ravenclaw" },
            { text: "Eat it, compliment her sazón, and ask for seconds.", house: "Hufflepuff" },
            { text: "Tell her how you 'know' how to cook because you saw so many cooking tiktoks.", house: "Gryffindor" },
            { text: "Help her cook so I learn all the secrets and become her favorite.", house: "Slytherin" }
        ]
    },
    {
        question: 'Where would you like to spend most of your time?',
        answers: [
            { text: "In a cozy corner filled with customer's orders and bagging salads.", house: "Ravenclaw" },
            { text: "In a bustling Just Salad location where I get to help all the lovely customers.", house: "Hufflepuff" },
            { text: "On a thrilling adventure to look for the missing salad", house: "Gryffindor" },
            { text: "In a quiet, strategic planning session on how to steal cookies from Just Salad.", house: "Slytherin" }
        ]
    },
    {
        question: "Which of these best describes your approach to challenges?",
        answers: [
            { text: "Face them head-on because you're just a chill girl.", house: "Gryffindor" },
            { text: "Think back to Justin's Wise Words and use them.", house: "Ravenclaw" },
            { text: "Reflect on my ultimate goal of becoming Proverbs 31 Women.", house: "Hufflepuff" },
            { text: "Become the wolf in sheeps clothing that I know you are.", house: "Slytherin" }
        ]
    },
    {
        question: "What’s your villain origin story?",
        answers: [
            { text: "Someone dog-eared a page in my book.", house: "Ravenclaw" },
            { text: "They didn’t say ‘thank you’ when I held the door open.", house: "Hufflepuff" },
            { text: "They underestimated me. Rookie mistake, I've lifted a baby once.", house: "Gryffindor" },
            { text: "They said I couldn’t do it. So I did it to prove them haters wrong.", house: "Slytherin" }
        ]
    }
];

const houseData = {
    Gryffindor: {
        crest: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/946397ca-37b3-4eed-9a27-6182d454e626/de0kjre-c20de09d-c0b8-4c67-b4b1-292217d2db93.png/v1/fill/w_784,h_1019/gryffindor_crest_by_readingnerd0415_de0kjre-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTMwMCIsInBhdGgiOiJcL2ZcLzk0NjM5N2NhLTM3YjMtNGVlZC05YTI3LTYxODJkNDU0ZTYyNlwvZGUwa2pyZS1jMjBkZTA5ZC1jMGI4LTRjNjctYjRiMS0yOTIyMTdkMmRiOTMucG5nIiwid2lkdGgiOiI8PTEwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.Ykv0DqUM0zrg-LkuULeM18l3pxPu_au_tYvF1qeZ5lw",
        desc: "Bravery, daring, and chivalry define you. A true lion at heart!"
    },
    Hufflepuff: {
        crest: "https://i.ebayimg.com/images/g/THIAAOSw9kxZ3Ndd/s-l1200.jpg",
        desc: "Kind, loyal, and patient — you value friendship and hard work."
    },
    Ravenclaw: {
        crest: "https://i.pinimg.com/736x/73/35/c5/7335c5b007ac54f2877ec1bdf96486e9.jpg",
        desc: "Wit, wisdom, and creativity are your greatest strengths."
    },
    Slytherin: {
        crest: "https://m.media-amazon.com/images/I/71jTE5obH-L.jpg",
        desc: "You’re ambitious and cunning — always a step ahead of the game."
    }
};

document.getElementById("start-btn").addEventListener("click", () => {
    document.getElementById("intro-screen").style.opacity = "0";
    setTimeout(() => {
        document.getElementById("intro-screen").style.display = "none";
        startQuiz();
    }, 600);
});

let currentQuestionIndex = 0;
let housePoints = {
    Gryffindor: 0,
    Ravenclaw: 0,
    Hufflepuff: 0,
    Slytherin: 0
};

const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const resultCard = document.getElementById("result-card");
const houseName = document.getElementById("house-name");
const houseCrest = document.getElementById("house-crest");
const houseDesc = document.getElementById("house-desc");
const progressBar = document.getElementById("progress-bar");

function startQuiz() {
    currentQuestionIndex = 0;
    housePoints = { Gryffindor: 0, Ravenclaw: 0, Hufflepuff: 0, Slytherin: 0 };
    resultCard.classList.add("hidden");
    document.getElementById("question-card").classList.remove("hidden");
    showQuestion();
}

function showQuestion() {
    const card = document.getElementById("question-card");

    card.classList.remove("fade-in");
    card.classList.add("fade-out");

    setTimeout(() => {
        const current = questions[currentQuestionIndex];
        questionText.innerText = current.question;

        answerButtons.innerHTML = "";
        nextBtn.style.display = "none";
        progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;

        current.answers.forEach(answer => {
            const btn = document.createElement("button");
            btn.innerText = answer.text;
            btn.onclick = () => {
                housePoints[answer.house]++;
                nextBtn.style.display = "block";
                Array.from(answerButtons.children).forEach(b => b.disabled = true);
                btn.style.backgroundColor = "#4a90e2";
                btn.style.color = "white";
            };
            answerButtons.appendChild(btn);
        });

        card.classList.remove("fade-out");
        card.classList.add("fade-in");
    }, 400);
    document.getElementById("karen-image").src = karenImages[currentQuestionIndex].src;
    document.getElementById("karen-caption").textContent = karenImages[currentQuestionIndex].caption;
}



nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("question-card").classList.add("hidden");
    resultCard.classList.remove("hidden");

    const topHouse = Object.entries(housePoints).sort((a, b) => b[1] - a[1])[0][0];
    houseName.innerText = topHouse;
    let glowColor = {
        Gryffindor: '0 0 25px red, 0 0 40px gold',
        Slytherin: '0 0 25px green, 0 0 40px silver',
        Hufflepuff: '0 0 25px yellow, 0 0 40px orange',
        Ravenclaw: '0 0 25px blue, 0 0 40px gray'
    };

    document.getElementById("house-crest").style.boxShadow = glowColor[topHouse];

    houseCrest.src = houseData[topHouse].crest;
    houseDesc.innerText = houseData[topHouse].desc;
    progressBar.style.width = `100%`;
    document.getElementById("tribute").classList.remove("hidden");
}

function restartQuiz() {
    startQuiz();
}
document.getElementById("restart-btn").addEventListener("click", restartQuiz);


