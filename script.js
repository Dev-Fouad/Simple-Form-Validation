let form = document.querySelector('.signup-form')
let Feedback = document.querySelector('.Feedback')
let Usernamepattern = /^[a-zA-Z]{6,12}$/;


form.addEventListener('submit' , function(e){

    e.preventDefault()

    //Basic validation
    let username = form.Username.value


    if(Usernamepattern.test(username)){
        // Feedback good info
        Feedback.textContent = "You are valid"
        Feedback.style.border = "2px solid green"

    }else{
        // Feedback bad info
        Feedback.textContent = "Username must contain only letters between only and must be between 6 and 12 character long"
        Feedback.style.border = "2px solid red"
        Feedback.style.fontSize = '12px'
    }
})


// Key board event
form.Username.addEventListener('keyup' , function(e){

    // console.log(e.target.value , form.Username.value);

    if(Usernamepattern.test(form.Username.value)){
        form.Username.setAttribute('class', 'suc')
    }else {
        form.Username.setAttribute('class' , 'error')
    }

})



//Testing Regex
// const username = 'shaunnn';
// const pattern = /^[a-z]{6,}$/;

// let result = pattern.test(username)

// if (result){
//     console.log('You are valid')
// }else {
//     console.log("You are invalid");
// }
