const login=()=>{
   
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

   const userDetails = JSON.parse(localStorage.getItem('userDetails')) 

  console.log(userDetails.email + " "+ email );
  console.log(userDetails.password + " "+ password );
   if(userDetails && email===userDetails.email && password===userDetails.password){
         alert('login success')
         localStorage.setItem('loggedIn', 'true')
         window.location.href="../pages/dashboard.html";
   }
   else if(userDetails && email===userDetails.email && password!=userDetails.password){
        alert('wrong password')
   }
   else alert('wrong credentials')
   
}