
// api url

let url = `https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=multiple`

// fetch data function

const fetchData = async () => {
    const res = await fetch(url);
    const data = await res.json();
    
    return data.results
}
//display data function

const displayData = async () => {
    try {
        let data = await fetchData();
        console.log(data);

        const questionContainer = document.createElement('div');
        questionContainer.setAttribute('class', 'question-container')
        const que = document.createElement('p');
        questionContainer.innerText = data[0].question

        const body = document.getElementById('quiz-container')
        body.append(questionContainer)

    } catch (error) {
        console.log(error);
    }
}


displayData();



