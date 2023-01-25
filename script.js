const email = document.getElementById('email')
const password = document.getElementById('password')
const submit = document.getElementById('submit')
const divtext = document.getElementById('text')
const linkk = document.getElementById('linkk')

const rp = 1234
const re = 'teste@gmail.com'

function check(){

    if( re == email.value && rp == password.value){
        divtext.innerHTML = '<p id="correct">Login feito com sucesso'
        linkk.style.visibility = 'visible'
        
    }

    else{
        divtext.innerHTML = '<p id="incorrect">Email e/ou senha incorretos'
    }

}