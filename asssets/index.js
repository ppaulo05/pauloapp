
/*Acionadores*/
const cadastrar = document.querySelector('#btcadastre');
const login = document.querySelector('#btlogin')
const goHome =  document.querySelector("#goHome")
const goHomeLogin =  document.querySelector('#goHomeLogin')
const btnEco = document.querySelector("#eco")
const btnHome = document.querySelector("#bthome")


/*Seções*/
const secaoInicial = document.querySelector('#inicial');
const secaoCadastre = document.querySelector('#cadastro')
const secaoLogin =  document.querySelector('#entrar')
const secaoHome = document.querySelector("#home")
const secaoEco = document.querySelector("#destino")


/*Funções*/
cadastrar.addEventListener("click",(e)=>{
    e.preventDefault()

    secaoInicial.classList.remove('ativo')
    secaoCadastre.classList.add('ativo')

})

login.addEventListener("click", (e)=>{

    e.preventDefault()

    secaoInicial.classList.remove('ativo')
    secaoLogin.classList.add('ativo')



})

goHome.addEventListener("click",(e)=>{
    e.preventDefault();
secaoCadastre.classList.remove("ativo")

secaoHome.classList.add("ativo")
})


goHomeLogin.addEventListener("click",(e)=>{
    e.preventDefault();
secaoLogin.classList.remove("ativo")

secaoHome.classList.add("ativo")
})



btnEco.addEventListener("click",()=>{
    secaoHome.classList.remove("ativo")
    secaoEco.classList.add('ativo')

})

btnHome.addEventListener("click",()=>{
    secaoEco.classList.remove('ativo')
    secaoHome.classList.add('ativo')
})