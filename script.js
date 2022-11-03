let form = document.querySelector('.signup-form')
let Feedback = document.querySelector('.feedback')


form.addEventListener('submit' , function(e){

    e.preventDefault()

    //Basic validation
    let username = form.Username.value
    let Usernamepattern = /^[a-zA-Z]{6,12}$/;


    if(Usernamepattern.test(username)){
        Feedback.textContent = "You are valid"
    }else{
        Feedback.textContent = "Enter a valid Username"
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
