
const answers = JSON.parse(localStorage.getItem('answers')) 
const reportCard = JSON.parse(localStorage.getItem('report-card')) 
console.log(reportCard);

const scoreReport = document.getElementById('score')
scoreReport.innerText=`Your Total Score : ${reportCard.score}/10`

const correct = document.getElementById('correct')
correct.innerText=`Correct Answers       : ${reportCard.correct}`

const wrong = document.getElementById('wrong')
wrong.innerText=`wrong Answers : ${reportCard.wrong}`

const skipped = document.getElementById('skipped')
skipped.innerText=`skipped Answers : ${reportCard.skip}`

const displayReport=()=>{
    answers.map((answer)=>{

        let status;
        let colour;
        if(answer.correctAnswer===answer.userValue){
            status= 'fa-solid fa-circle-check'
            colour='green'
        }
        else if(answer.userValue===null){
            status= 'fa-sharp fa-solid fa-minus'
            colour='orange'
        } //
        else {
            status= 'fa-solid fa-circle-xmark '
            colour='red'
    }

        const card = document.getElementById('card')
        card.style.display='block'
        const row = document.createElement('tr')
        const d1 = document.createElement('td')
        d1.innerText= answer.question;
        const d2 = document.createElement('td')
        d2.innerHTML= `<i class="${status}" style="color:${colour}"  ></i>`;
        d2.className='icons'
        const d3 = document.createElement('td')
        const button = document.createElement('button')
        const extraInfo = `${answer.question}<br/>
        <div class="hello"> Correct Answer : ${answer.correctAnswer}  </div> <div class="hello">Your Answer : ${answer.userValue}</div>`
        button.innerText= 'view';
        button.className='btn'
        button.style.marginTop='0rem'
        button.addEventListener("click",()=>{
            d1.innerHTML=extraInfo
        })
        d3.append(button)
        row.append(d1,d2,d3)
        card.append(row);
    })
}