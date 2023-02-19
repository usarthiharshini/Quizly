
const userDetails = JSON.parse(localStorage.getItem('userDetails')) 

let loading = true;


// api url



let url = `https://opentdb.com/api.php?amount=10&category=${userDetails.topic}`



let questions; // questions

let answers=[]; // array to store the answers user entered

let value=null; // value to store the option user entered

let score=0; // score value 

let correct=0; // number of correct answers

let wrong=0; // number of wrong answers

let skip=0; // number of questions skipped by user




// fetch data function
const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();  
   return data.results
}

//display data function

let index=0; // current question on display

const displayData = async () => {
    try {
      questions = await fetchData();
      loading=false;
      displayQuestion(questions);
    } catch (error) {
        console.log(error);
    }
}

//to shuffle options 

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
// display individual question

const displayQuestion=(data)=>{

    const questionNumber = document.createElement('p')
    questionNumber.innerText= `Question ${index+1} `
    const questionContainer = document.createElement('p');
    questionContainer.setAttribute("class","question-container");
    
    questionContainer.innerText = data[index].question

    let newArray = [...data[index].incorrect_answers,data[index].correct_answer]
   shuffle(newArray)

    newArray.map((option)=>{
        const value1= document.createElement('label');
       
        value1.textContent= option;
       
        const option1= document.createElement('input');
        option1.type='radio';
        option1.name='option';
        option1.setAttribute('class','radio')
        option1.value=option;
        option1.addEventListener('change',()=>{
            value=option1.value;
            
            console.log(value);

        })
       
        const optionContainer = document.createElement('div');
        optionContainer.append(option1,value1)
        optionContainer.setAttribute('id','options')
        //optionContainer.style.display='flex'
        
        questionContainer.append(optionContainer)
    })

    const button = document.createElement('button');
    button.innerText='Go to next question'
    button.setAttribute('class','next-btn')
    button.addEventListener('click',nextQuestion)
    const body = document.getElementById('quiz-box')
    body.innerText="";
    body.append(questionNumber,questionContainer,button)
}
const nextQuestion=()=>{
    checkScore();
  index++;
  checkIndex(index)
    displayQuestion(questions)
}
const checkIndex=(i)=>{
    let reportCard = {
        score: score,
        wrong: wrong,
        correct: correct,
        skip: skip
    }
    localStorage.setItem('report-card',JSON.stringify(reportCard))
    localStorage.setItem('answers', JSON.stringify(answers))
    value=null;
    if(i===10){
      
    window.location.href="../pages/report.html"
    }
}
const checkScore=()=>{
  
    let details={
        question: questions[index].question,
        userValue: `${value?value:'Not Attempted'}`,
        correctAnswer:questions[index].correct_answer
    } 
    answers= [...answers,details];

   if(value===questions[index].correct_answer){
     score++;
    console.log(score+"score");
    correct++;
   }
   else if(value===null){
    skip++;
   }
   else {wrong++;};
}
displayData();