const name = document.getElementById('myname')
const email = document.getElementById('mymail')
const password = document.getElementById('mypass')
const form = document.getElementById('myForm')
const errorElement = document.getElementById('error')


form.addEventListener('submit',(e) => {
    let messages = []

    if(name.value === ''|| name.value == null){
        messages.push('Name is Required')
    }

    if (name.value === Number){
        messages.push('Name Must Not Be a Number')
    }

    if (email.value === ''){
        messages.push('Email must not be blank and must contain @ symbol')
    }


    if (password.value.length <=6){
        messages.push('Password Must Be Longer than 6 Characters')
    }


    if (password.value === password){
        messages.push('Password Cannot be Password')
    }

    if(messages.length > 0){
        e.preventDefault()

        errorElement.innerText = messages.join(' and ')

    }
})