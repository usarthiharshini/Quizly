const navbar2 = ()=>{

    const loggedIn = JSON.stringify(localStorage.getItem('loggedIn'));
  const userDetails = JSON.parse(localStorage.getItem('userDetails')) 
   console.log(loggedIn);
   if (loggedIn){
    const user =document.getElementById('user');
 
    
}

    return ` <div class="nav">
    <a href="/pages/index.html" >
    <img src="../assets/quizly-logo.png" class="logo"/>
    </a>
   
    <h3 id="user">Hi, ${userDetails.firstName+' '+userDetails.lastName}</h3>
</div>`
}
export default navbar2;