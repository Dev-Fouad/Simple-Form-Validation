let form = document.querySelector('.signup-form')
let Feedback = document.querySelector('.Feedback')
console.log(Feedback);


form.addEventListener('submit' , function(e){

    e.preventDefault()

    //Basic validation
    let username = form.Username.value
    let Usernamepattern = /^[a-zA-Z]{6,12}$/;


    if(Usernamepattern.test(username)){
        // Feedback good info
        Feedback.textContent = "You are valid"
        Feedback.style.border = "2px dotted green"

    }else{
        // Feedback bad info
        Feedback.textContent = "Username must contain only letters between only and must be between 6 and 12 character long"
        Feedback.style.border = "2px solid red"
        Feedback.style.fontSize = '12px'
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
