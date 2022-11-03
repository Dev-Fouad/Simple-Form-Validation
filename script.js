let form = document.querySelector('.signup-form')


form.addEventListener('submit' , function(e){
    e.preventDefault()
    console.log(form.username.value);
})

//Testing Regex
const username = 'shaun';
const pattern = /[a-z]{6,}/;

let result = pattern.test(username)
