
const signup=()=>{
    const firstName = document.getElementById('first-name');
    const lastName = document.getElementById('last-name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    const userDetails = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    }
   // alert(JSON.stringify(userDetails));
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
   window.location.href='../pages/login.html'
}