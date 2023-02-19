
const userDetails = JSON.parse(localStorage.getItem('userDetails')) 

const math=()=>{
    const newUserDetails = {...userDetails,topic:19,topicName: 'Mathematics'}
    console.log(newUserDetails);
    localStorage.setItem('userDetails', JSON.stringify(newUserDetails));
    window.location.href='../pages/quiz.html'
}
const celeb=()=>{
    const newUserDetails = {...userDetails,topic:26,topicName: 'Celebrity'}
    console.log(newUserDetails);
    localStorage.setItem('userDetails', JSON.stringify(newUserDetails));
    window.location.href='../pages/quiz.html'
}
const et=()=>{
    const newUserDetails = {...userDetails,topic:14,topicName: 'Entertainment'}
    console.log(newUserDetails);
    localStorage.setItem('userDetails', JSON.stringify(newUserDetails));
    window.location.href="../pages/quiz.html";
}
const sports=()=>{
    const newUserDetails = {...userDetails,topic:21,topicName: 'Sports'}
    console.log(newUserDetails);
    localStorage.setItem('userDetails', JSON.stringify(newUserDetails));
    window.location.href='../pages/quiz.html'
}



