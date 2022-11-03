let form = document.querySelector('.signup-form')
let feedback = document.querySelector('.feedback')


form.addEventListener('submit' , function(e){

    e.preventDefault()

    //Basic validation
    let username = form.username.value
    let Usernamepattern = /^[a-zA-Z]{6,12}$/;


    if(Usernamepattern.test(username)){
        feedback.textContent = "You are valid"
    }else 
})

//Testing Regex
const username = 'shaunnn';
const pattern = /^[a-z]{6,}$/;

let result = pattern.test(username)

if (result){
    console.log('You are valid')
}else {
    console.log("You are invalid");
}
